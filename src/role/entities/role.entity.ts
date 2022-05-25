import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  name: string

  @Column({ nullable: true })
  description: string

}

export default Role