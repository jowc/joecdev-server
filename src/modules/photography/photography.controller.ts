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
import { Photograph } from './photography.entity';
import { photographyDto } from './photography.dto';

@Controller('photos')
export class PhotographyController {
  constructor(private photoService: PhotographyService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async addPhoto(@Body() photo: photographyDto): Promise<Photograph> {
    // console.log(photo);
    return await this.photoService.save(photo);
  }

  @Get('all')
  async getAll(): Promise<Photograph[]> {
    return await this.photoService.findAll();
  }

  @Get('/:id')
  async getOnePhoto(@Param('id') id: number): Promise<Photograph> {
    return await this.photoService.findOne(id);
  }
}
