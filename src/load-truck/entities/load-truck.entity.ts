import { Entity, Column, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm'
import { Truck } from 'src/truck/entities/truck.entity'
import { Load } from 'src/load/entities/load.entity'

@Entity()
export class LoadTruck {
  @PrimaryGeneratedColumn()
  public loadTruckId!: number

  @Column()
  public isActive!: boolean

  @ManyToOne(() => Load, (load) => load.id)
  public load!: Load

  @ManyToOne(() => Truck, (truck) => truck.id)
  public truck!: Truck
}