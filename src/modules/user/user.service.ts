import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto, UpdateDto } from './dto/user.dto';
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

  async createUser(user: RegisterDto): Promise<User | string> {
    if (user.password) {
      if (user.password !== user.confirm_password) {
        await 'password does not match';
      } else {
        delete user.confirm_password;
        await this.userRepo.save(user);
      }
    }
    return await this.userRepo.save(user);
  }

  async updateUser(id: number, payload: any): Promise<any> {
    const user: User = await this.getOne(id);
    const updatedUser: any = this.userRepo.create({ ...user, ...payload });
    // console.log('user instance: ', updatedUser);
    return await this.createUser(updatedUser);
  }

  async deleteUser(id: number) {
    return await this.userRepo.delete({ id });
  }
}
