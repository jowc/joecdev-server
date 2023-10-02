import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Portfolio } from './portfolio.entity';

@Entity('images')
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  portfolio_url: string;

  @ManyToOne(() => Portfolio, (portfolio) => portfolio.images, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  portfolio: Portfolio;
}
