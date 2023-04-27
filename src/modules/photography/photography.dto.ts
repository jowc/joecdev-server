import { IsNotEmpty, IsUrl } from 'class-validator';

export class photographyDto {
  @IsNotEmpty()
  @IsUrl()
  photo_url: string;

  @IsNotEmpty()
  featured: boolean;
}
