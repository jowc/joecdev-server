import { Length } from 'class-validator';

import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Portfolio } from './portfolio.entity';

@Entity()
export class Stack extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  @Length(2, 12)
  name: string;

  @ManyToOne(() => Portfolio, (portfolio) => portfolio.stacks, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  portfolio: Portfolio;
}
