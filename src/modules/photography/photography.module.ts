import { Module } from '@nestjs/common';
import { PhotographyService } from './photography.service';
import { PhotographyController } from './photography.controller';
import { Photograph } from './photography.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Photograph])],
  providers: [PhotographyService],
  controllers: [PhotographyController],
})
export class PhotographyModule {}
