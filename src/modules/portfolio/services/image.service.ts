import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from '../entities/image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepo: Repository<Image>,
  ) {}
  findOne(id: number) {
    return this.imageRepo.findOneByOrFail({ id });
  }
  findAll(): Promise<Image[]> {
    return this.imageRepo.find();
  }
  addImage(stack: Image): Promise<Image> {
    return this.imageRepo.save(stack);
  }
  update(stack: Image): Promise<Image> {
    return this.imageRepo.save(stack);
  }
  delete(id: number): Promise<any> {
    return this.imageRepo.delete(id);
  }
}
