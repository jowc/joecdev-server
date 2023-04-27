import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PhotographyService } from './photography.service';
import { Photo } from './photography.entity';
import { photographyDto } from './photography.dto';

@Controller('photos')
export class PhotographyController {
  constructor(private photoService: PhotographyService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async addPhoto(@Body() photo: photographyDto): Promise<Photo> {
    // console.log(photo);
    return await this.photoService.save(photo);
  }

  @Get('all')
  async getAll(): Promise<Photo[]> {
    return await this.photoService.findAll();
  }

  @Get('/:id')
  async getOnePhoto(@Param('id') id: number): Promise<Photo> {
    return await this.photoService.findOne(id);
  }
}
