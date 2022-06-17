import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ClientLoad } from 'src/client-load/entities/client-load.entity'
import { LoadLocation } from '../../load-locations/entities/load-location.entity'

@Entity()
export class Load {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: new Date() })
  created_at: string

  @Column()
  load_id: string

  @Column( { nullable: true })
  customer_load_id: string

  @Column({ nullable: true })
  customer_ref: string

  @Column({ default: false })
  sealed: boolean

  @Column({ default: true })
  hazmat: boolean

  @Column({ nullable: true })
  note: string

  @OneToMany(() => ClientLoad, clientLoad => clientLoad.client)
  public ClientLoad!: ClientLoad[];


  @OneToMany(() => LoadLocation, (loadLocation) => loadLocation.load)
  public loadLocations!: LoadLocation[];
}
