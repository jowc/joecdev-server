import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photograph } from './photography.entity';
import { Repository } from 'typeorm';
import { photographyDto } from './photography.dto';

@Injectable()
export class PhotographyService {
  constructor(
    @InjectRepository(Photograph)
    private photographyRepo: Repository<Photograph>,
  ) {}

  async save(photo: photographyDto): Promise<Photograph> {
    return await this.photographyRepo.save(photo);
  }

  async update(photo: Photograph): Promise<Photograph> {
    const oldPhoto = await this.photographyRepo.findOneBy({ id: photo.id });
    return await this.save({ ...oldPhoto, ...photo });
  }

  async findAll(): Promise<Photograph[]> {
    return await this.photographyRepo.find();
  }

  async findOne(id: number): Promise<Photograph | null> {
    return await this.photographyRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.photographyRepo.delete(id);
  }
}
