import {
  ConfigModule,
  ConfigModuleOptions,
  ConfigService,
} from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { Photo } from 'src/modules/photography/photography.entity';
import { Portfolio } from 'src/modules/portfolio/entities/portfolio.entity';
import { Stack } from 'src/modules/portfolio/entities/stack.entity';
import { User } from 'src/modules/user/user.entity';

export class TypeORMConfig {
  static getConfig(_configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: _configService.get('DB_HOST'),
      port: _configService.get('DB_PORT'),
      username: _configService.get('DB_USER'),
      password: _configService.get('DB_PASSWORD'),
      database: _configService.get('DB'),
      entities: [Portfolio, Stack, Photo, User],
      synchronize: true,
    };
  }
}

export const typeORMConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeORMConfig.getConfig(configService),
};

export const configModuleOption: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: '.development.env',
};
