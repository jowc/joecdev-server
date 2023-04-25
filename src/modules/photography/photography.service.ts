import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './photography.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotographyService {
  constructor(
    @InjectRepository(Photo)
    private photographyRepo: Repository<Photo>,
  ) {}

  async save(photo): Promise<Photo> {
    return await this.photographyRepo.save(photo);
  }

  async update(photo): Promise<Photo> {
    const oldPhoto = await this.photographyRepo.findOneBy({ id: photo.id });
    return await this.save({ ...oldPhoto, photo });
  }

  async findAll(): Promise<Photo[]> {
    return await this.photographyRepo.find();
  }

  async findOne(id: number): Promise<Photo | null> {
    return await this.photographyRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.photographyRepo.delete(id);
  }
}
