import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Stack } from './stack.entity';

@Entity()
export class Portfolio extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'text' }) title: string;
  @Column({ type: 'text' }) description: string;
  @OneToMany(() => Stack, (stack) => stack.portfolio)
  stacks: Stack[];
  @Column({ type: 'text' }) portfolio_image: string;
  @Column({ type: 'text', nullable: true }) portfolio_link: string;
  @CreateDateColumn({ nullable: true }) created_at: Date;
  @UpdateDateColumn({ nullable: true }) updated_at: Date;
}
