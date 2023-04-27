import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { RegisterDto, UpdateDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/all')
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  // findOne(@Param('id') id: string):  User_singularDto {
  @Get('/:id')
  async getUser(@Param('id') id: number): Promise<User> {
    return await this.userService.getOne(+id);
  }

  @Post('/register')
  @UsePipes(ValidationPipe)
  async createUser(@Body() user: RegisterDto): Promise<User | string> {
    return await this.userService.createUser(user);
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: number,
    @Body(ValidationPipe) payload: UpdateDto,
  ): Promise<User> {
    return await this.userService.updateUser(id, payload);
  }

  @Delete()
  deleteUser(@Param('id') id: number) {
    this.userService.deleteUser(+id);
  }
}
