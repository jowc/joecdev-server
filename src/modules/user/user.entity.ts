import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  user_name: string;

  @Column()
  name: string;

  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  joined: Date;
}
