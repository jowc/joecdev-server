import { IsNotEmpty } from 'class-validator';

export class StackDto {
  @IsNotEmpty()
  name: string;
}
