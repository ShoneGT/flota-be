import { Entity, Column, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm'
import { ClientLoad } from 'src/client-load/entities/client-load.entity'
@Entity()
export class Load {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: new Date() })
  created_at: string

  @Column()
  load_id: string

  @Column()
  pickup_address: string

  @Column()
  delivery_address: string

  @Column()
  pickup_date: Date

  @Column()
  delivery_date: Date

  @Column({ nullable: true })
  note: string

  @OneToMany(() => ClientLoad, clientLoad => clientLoad.client)
  public ClientLoad!: ClientLoad[];
}