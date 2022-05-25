import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ nullable: true })
  description: string
}

export default City