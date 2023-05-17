import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';

export class photographyDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  photo_url: string;

  @ApiProperty()
  @IsNotEmpty()
  featured: boolean;
}
