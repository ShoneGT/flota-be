import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  name: string

  @Column({ nullable: true })
  description: string
}

export default State