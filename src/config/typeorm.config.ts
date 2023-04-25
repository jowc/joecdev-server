import { ConfigModuleOptions } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Photo } from 'src/photography/photography.entity';
import { Portfolio } from 'src/portfolio/entities/portfolio.entity';
import { Stack } from 'src/portfolio/entities/stack.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'joecdev',
  entities: [Portfolio, Stack, Photo],
  synchronize: true,
};

export const configModuleOption: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: '.development.env',
};

const typeORMConfigEnv: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  entities: [Portfolio, Stack, Photo],
  synchronize: true,
};
