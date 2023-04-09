import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CoreModule } from './core/core.module';

import { AppService } from './app.service';
import { PhotographyModule } from './photography/photography/photography.module';
@Module({
  imports: [CoreModule, PhotographyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
