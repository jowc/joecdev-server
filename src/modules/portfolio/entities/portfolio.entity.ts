import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Stack } from './stack.entity';
import { Image } from '../../upload/image.entity';

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
  @JoinColumn()
  image?: Image;

  @Column({ type: 'text', nullable: true })
  portfolio_link: string;

  @CreateDateColumn({ nullable: false, default: new Date() })
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;
}
