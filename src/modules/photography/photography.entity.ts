import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('photographs')
export class Photograph {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  photo_url: string;

  @Column({
    default: false,
    type: 'boolean',
  })
  featured: boolean;
}
