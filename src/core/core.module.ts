import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  configModuleOption,
  typeORMConfigAsync,
} from 'src/config/typeorm.config';
import { PhotographyModule } from 'src/modules/photography/photography.module';
import { PortfolioModule } from 'src/modules/portfolio/portfolio.module';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOption),
    TypeOrmModule.forRootAsync(typeORMConfigAsync),
    PortfolioModule,
    PhotographyModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class CoreModule {}
