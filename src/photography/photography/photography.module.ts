import { Module } from '@nestjs/common';
import { PhotographyService } from './photography.service';
import { PhotographyController } from './photography.controller';

@Module({
  providers: [PhotographyService],
  controllers: [PhotographyController]
})
export class PhotographyModule {}
