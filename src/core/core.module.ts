import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  configModuleOption,
  typeORMConfigAsync,
} from 'src/config/typeorm.config';
import { PhotographyModule } from 'src/modules/photography/photography.module';
import { PortfolioModule } from 'src/modules/portfolio/portfolio.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOption),
    TypeOrmModule.forRootAsync(typeORMConfigAsync),
    PortfolioModule,
    PhotographyModule,
  ],
  controllers: [],
  providers: [],
})
export class CoreModule {}
