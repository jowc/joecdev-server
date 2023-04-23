import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CoreModule } from './core/core.module';

import { AppService } from './app.service';
import { PhotographyModule } from './photography/photography/photography.module';
import { PortfolioModule } from './portfolio/portfolio.module';
@Module({
  imports: [CoreModule, PhotographyModule, PortfolioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
