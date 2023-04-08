import { IsString, IsNotEmpty, Length, IsArray, IsFQDN } from 'class-validator';

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
  @IsFQDN()
  portfolio_link: string;
}
