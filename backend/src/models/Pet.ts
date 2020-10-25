import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import Image from './Image'

@Entity('pets')
export default class Pet {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  latitude: number

  @Column()
  longitude: number

  @Column()
  pet_name: string

  @Column()
  pet_type: string

  @Column()
  detail: string

  @Column()
  when: Date

  @Column()
  contact_name: string

  @Column()
  phone_number: string

  @Column({ default: 0.00 })
  reward: number;

  @Column({ default: false })
  founded: boolean

  @Column()
  action_type: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Image, image => image.pet, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'pet_id' })
  images: Image[]
}
