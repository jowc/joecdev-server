import { IsNotEmpty } from 'class-validator';

export class StackDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  porfolioId: number;
}
