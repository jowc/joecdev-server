import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './user.dto';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async getOne(id: number): Promise<User> {
    return await this.userRepo.findOneByOrFail({ id });
  }

  createUser(user: UserDto) {
    return this.userRepo.save(user);
  }

  async updateUser(id: number, payload: User) {
    const user = await this.getOne(id);
    const updatedUser = this.userRepo.create({ ...user, ...payload });
    // console.log('user instance: ', updatedUser);
    return await this.createUser(updatedUser);
  }

  async deleteUser(id: number) {
    return await this.userRepo.delete({ id });
  }
}
