import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Portfolio } from 'src/portfolio/entities/portfolio.entity';
import { Stack } from 'src/portfolio/entities/stack.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'joecdev',
  entities: [Portfolio, Stack],
  synchronize: true,
};
