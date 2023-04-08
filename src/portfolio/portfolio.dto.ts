import { IsString, IsNotEmpty, Length, IsArray } from 'class-validator';

export class CreateJobsDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  description: string;

  @IsNotEmpty()
  @IsArray()
  stacks: string[];

  @IsNotEmpty()
  @IsString()
  portfolio_image: string[];

  @IsString()
  portfolio_link: string;
}
