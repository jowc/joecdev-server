import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Portfolio } from 'src/portfolio/portfolio.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'joecdev',
  entities: [Portfolio],
  synchronize: true,
};
