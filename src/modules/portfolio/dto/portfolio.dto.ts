import {
  IsString,
  IsNotEmpty,
  Length,
  IsFQDN,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { Stack } from '../entities/stack.entity';
import { Image } from 'src/modules/upload/image.entity';
import { Expose, Transform, Type } from 'class-transformer';

export class CreatePortfolioDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 255)
  description: string;

  @IsNotEmpty()
  stacks: Stack[];

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  image?: Image;

  @IsString()
  @IsFQDN()
  portfolio_link: string;
}

export class PortfolioResponseDto {
  title: string;

  description: string;

  @Type(() => Stack)
  @Expose()
  stacks: Stack[];

  @Type(() => Image)
  @Transform(({ value }) => value?.link)
  @Expose()
  image?: Image;

  portfolio_link: string;

  constructor(partial: Partial<PortfolioResponseDto>) {
    Object.assign(this, partial);
  }
}
