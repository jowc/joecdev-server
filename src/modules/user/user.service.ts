import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from './dto/user.dto';
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

  async findOne(username: string): Promise<User> {
    return await this.userRepo.findOneBy({ username });
  }

  async createOrUpdateUser(user: RegisterDto): Promise<User | string> {
    if (user.password) {
      if (user.password !== user.confirm_password) {
        return await 'password does not match';
      } else {
        delete user.confirm_password;
        const initUser = this.userRepo.create(user);
        return await this.userRepo.save(initUser);
      }
    }
    return await this.userRepo.save(user);
  }

  async updateUser(id: number, payload: any): Promise<any> {
    const user: User = await this.getOne(id);
    const updatedUser: any = this.userRepo.create({ ...user, ...payload });
    // console.log('user instance: ', updatedUser);
    return await this.createOrUpdateUser(updatedUser);
  }

  async deleteUser(id: number) {
    return await this.userRepo.delete({ id });
  }
}
