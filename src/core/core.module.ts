import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configModuleOption, typeORMConfig } from 'src/config/typeorm.config';
import { PhotographyModule } from 'src/photography/photography.module';
import { PortfolioModule } from 'src/portfolio/portfolio.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOption),
    TypeOrmModule.forRoot(typeORMConfig),
    PortfolioModule,
    PhotographyModule,
  ],
  controllers: [],
  providers: [],
})
export class CoreModule {}
