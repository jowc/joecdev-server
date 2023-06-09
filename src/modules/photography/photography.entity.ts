import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('photos')
export class Photo {
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
