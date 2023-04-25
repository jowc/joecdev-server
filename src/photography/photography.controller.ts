import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PhotographyService } from './photography.service';
import { Photo } from './photography.entity';

@Controller('photos')
export class PhotographyController {
  constructor(private photoService: PhotographyService) {}

  @Post()
  async addPhoto(@Body() photo): Promise<Photo> {
    console.log(photo);
    return await this.photoService.save(photo);
  }

  @Get('all')
  async getAll(): Promise<Photo[]> {
    return await this.photoService.findAll();
  }

  @Get(':id')
  async getOnePhoto(@Param('id') id: number): Promise<Photo> {
    return await this.photoService.findOne(id);
  }
}
