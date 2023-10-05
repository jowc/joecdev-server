import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { v4 as uuid } from 'uuid';

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

  constructor(private readonly configService: ConfigService) {
    AWS.config.update({
      accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
      region: this.configService.get<string>('AWS_REGION'),
    });
  }

  async upload(fileName: string, file: Buffer): Promise<any> {
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
}
