import { Stack } from 'src/stack/stack.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Portfolio extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'text' }) title: string;
  @Column({ type: 'text' }) description: string;
  @OneToMany(() => Stack, (stack) => stack.portfolio)
  stacks: Stack[];
  @Column({ type: 'text' }) portfolio_image: string;
  @Column({ type: 'text', nullable: true }) portfolio_link: string;
}
