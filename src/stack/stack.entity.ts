import { Length } from 'class-validator';
import { Portfolio } from 'src/portfolio/portfolio.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Stack {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'text' })
  @Length(2, 12)
  name: string;
  @ManyToOne(() => Portfolio, (portfolio) => portfolio.stacks, {
    nullable: true,
  })
  portfolio;
}
