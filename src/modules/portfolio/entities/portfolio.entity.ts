import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Stack } from './stack.entity';
import { Image } from './image.entity';

@Entity()
export class Portfolio extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => Stack, (stack) => stack.portfolio)
  stacks: Stack[];

  @OneToOne(() => Image, (image) => image.portfolio)
  image?: Image;

  @Column({ type: 'text', nullable: true })
  portfolio_link: string;

  @CreateDateColumn({ nullable: true })
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;
}
