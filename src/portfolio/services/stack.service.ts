import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stack } from '../entities/stack.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StackService {
  constructor(
    @InjectRepository(Stack)
    private stackRepo: Repository<Stack>,
  ) {}
  findOne(id: number) {
    return this.stackRepo.findOneByOrFail({ id });
  }
  findAll(): Promise<Stack[]> {
    return this.stackRepo.find();
  }
  addStack(stack: Stack): Promise<Stack> {
    return this.stackRepo.save(stack);
  }
  update(stack: Stack): Promise<Stack> {
    return this.stackRepo.save(stack);
  }
  delete(id: number): Promise<any> {
    return this.stackRepo.delete(id);
  }
}
