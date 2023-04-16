import { Module } from '@nestjs/common';
import { StackController } from './stack.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stack } from './stack.entity';
import { StackService } from './stack.service';

@Module({
  controllers: [StackController],
  imports: [TypeOrmModule.forFeature([Stack])],
  providers: [StackService],
  exports: [StackService],
})
export class StackModule {}
