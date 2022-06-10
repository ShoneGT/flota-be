import { Entity, Column, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm'
import { Exclude } from 'class-transformer';
import Role from 'src/role/entities/role.entity'
import State from 'src/state/entities/state.entity'
import City from 'src/city/entities/city.entity'
import { User } from 'src/user/entities/user.entity';
import { Truck } from 'src/truck/entities/truck.entity';

@Entity()
export class TruckUser {
  @PrimaryGeneratedColumn()
  public userTruckId!: number

  @Column()
  public truckId!: number

  @Column()
  public userId!: number

  @Column()
  public isActive!: boolean

  @ManyToOne(() => User, (user) => user.id)
  public user!: User

  @ManyToOne(() => Truck, (truck) => truck.id)
  public truck!: Truck
}
