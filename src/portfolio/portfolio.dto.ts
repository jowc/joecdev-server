import { IsString, IsNotEmpty, Length, IsFQDN } from 'class-validator';

export class CreateJobsDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  description: string;

  stacks: stacksDto[];

  @IsNotEmpty()
  @IsString()
  portfolio_image: string;

  @IsString()
  @IsFQDN()
  portfolio_link: string;
}

class stacksDto {
  id: number;
}
