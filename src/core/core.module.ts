import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from 'src/config/typeorm.config';
import { PortfolioModule } from 'src/portfolio/portfolio.module';
import { StackModule } from 'src/stack/stack.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeORMConfig),
    PortfolioModule,
    StackModule,
  ],
  controllers: [],
  providers: [],
})
export class CoreModule {}
