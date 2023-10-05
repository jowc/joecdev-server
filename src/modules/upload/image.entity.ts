import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Portfolio } from '../portfolio/entities/portfolio.entity';

@Entity('images')
export class Image {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  portfolio_url: string;

  @OneToOne(() => Portfolio, (portfolio) => portfolio.image, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  portfolio: Portfolio;
}
