import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { PortfolioModule } from './portfolio/portfolio.module';
import { CoreModule } from './core/core.module';

import { AppService } from './app.service';
@Module({
  imports: [PortfolioModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
