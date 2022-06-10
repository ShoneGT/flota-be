import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { ClientLoad } from 'src/client-load/entities/client-load.entity'

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  client_score: number

  @Column()
  address: string

  @Column()
  phone: string

  @Column({ nullable: true })
  note: string


  @OneToMany(() => ClientLoad, clientLoad => clientLoad.load)
  public ClientLoad!: ClientLoad[];
}
