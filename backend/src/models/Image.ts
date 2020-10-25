import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import Pet from './Pet'

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Pet, pet => pet.images)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet
}
