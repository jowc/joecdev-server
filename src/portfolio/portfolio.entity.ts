import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Portfolio {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'text' }) title: string;
  @Column({ type: 'text' }) description: string;
  @Column({ array: true, type: 'text' }) stacks: string;
  @Column({ type: 'text' }) portfolio_image: string;
  @Column({ type: 'text', nullable: true }) portfolio_link: string;
}
