import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import * as AWS from 'aws-sdk';
import { Repository } from 'typeorm';
import { Image } from './image.entity';
import { v4 as uuid } from 'uuid';
import { ImageSaveResponseInterface } from './image.types';

type ImageUploadedInterface = {
  link: string;
  name: string;
  message: string;
};

@Injectable()
export class UploadService {
  private readonly s3 = new AWS.S3();

  private readonly bucketName = this.configService.get<string>(
    'AWS_PUBLIC_BUCKET_NAME',
  );

  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(Image)
    private readonly imageRepo: Repository<Image>,
  ) {
    AWS.config.update({
      accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
      region: this.configService.get<string>('AWS_REGION'),
    });
  }

  async upload(
    fileName: string,
    file: Buffer,
  ): Promise<ImageUploadedInterface> {
    try {
      const uploaded = await this.s3
        .upload({
          Bucket: this.bucketName,
          Key: fileName,
          Body: file,
        })
        .promise();
      return {
        link: uploaded.Location,
        name: fileName,
        message: 'Image uploaded succesfully',
      };
    } catch (error) {
      throw new Error(`Failed to upload file to S3: ${error?.message}`);
    }
  }

  async saveImage(
    fileName: string,
    file: Buffer,
  ): Promise<ImageSaveResponseInterface> {
    let imageName = fileName;
    try {
      const ImageExist = await this.imageRepo.exist({
        where: { title: fileName },
      });
      if (ImageExist) imageName = `${uuid()}_${fileName}`;
      const uploaded = await this.uploadHandler(
        this.bucketName,
        imageName,
        file,
        fileName,
      );
      return await this.imageRepo.save({
        title: fileName,
        portfolio_url: uploaded.link,
      });
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to upload file to S3: ${error?.message}`);
    }
  }

  async getImage(id: number) {
    return await this.imageRepo.findOne({ where: { id } });
  }

  async uploadHandler(
    buket: string,
    key: string,
    file: Buffer,
    fileName?: string,
  ) {
    const uploaded = await this.s3
      .upload({
        Bucket: buket,
        Key: key,
        Body: file,
      })
      .promise();
    return {
      link: uploaded.Location,
      name: fileName || uploaded.Key,
      message: 'Image uploaded succesfully',
    };
  }
}
