import { Entity, Column, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm'
import { Load } from 'src/load/entities/load.entity'
import { Client } from 'src/client/entities/client.entity'

@Entity()
export class ClientLoad {
  @PrimaryGeneratedColumn()
  public clientLoaadId!: number

  @Column()
  public isActive!: boolean

  @ManyToOne(() => Load, (load) => load.id)
  public load!: Load

  @ManyToOne(() => Client, (client) => client.id)
  public client!: Client
}
