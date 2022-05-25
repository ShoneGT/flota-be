import { Entity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Exclude } from 'class-transformer';
import Role from 'src/role/entities/role.entity'
import State from 'src/state/entities/state.entity'
import City from 'src/city/entities/city.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  created_at: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ unique: true })
  email: string

  @Column()
  @Exclude()
  password: string

  @Column({ unique: true })
  phone: string

  @Column()
  address: string

  @Column()
  note: string

  @Column()
  dob: Date

  @OneToOne(() => Role)
  @JoinColumn()
  role: Role

  @OneToOne(() => State)
  @JoinColumn()
  state: State

  @OneToOne(() => City)
  @JoinColumn()
  city: City

}
