import { Module } from '@nestjs/common';
import { PortfolioController } from './controllers/portfolio.controller';
import { PortfolioService } from './services/portfolio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Portfolio } from './entities/portfolio.entity';
import { Stack } from './entities/stack.entity';
import { StackController } from './controllers/stack.controller';
import { StackService } from './services/stack.service';

import { UploadModule } from '../upload/upload.module';

@Module({
  imports: [TypeOrmModule.forFeature([Portfolio, Stack]), UploadModule],
  controllers: [PortfolioController, StackController],
  providers: [PortfolioService, StackService],
})
export class PortfolioModule {}
