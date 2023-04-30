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
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { RegisterDto, UpdateDto } from './dto/user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/all')
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Get('/:id')
  async getUser(@Param('id') id: number): Promise<User> {
    return await this.userService.getOne(+id);
  }

  @Post('/register')
  @UsePipes(ValidationPipe)
  async createUser(@Body() user: RegisterDto): Promise<User | string> {
    return await this.userService.createOrUpdateUser(user);
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: number,
    @Body(ValidationPipe) payload: UpdateDto,
  ): Promise<User> {
    return await this.userService.updateUser(id, payload);
  }

  @Delete('/:id')
  @HttpCode(200)
  deleteUser(@Param('id') id: number) {
    this.userService.deleteUser(+id);
  }
}
