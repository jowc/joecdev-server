import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Portfolio } from './portfolio.entity';

@Entity('images')
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  portfolio_url: string;

  @OneToOne(() => Portfolio, (portfolio) => portfolio.image, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  portfolio: Portfolio;
}
