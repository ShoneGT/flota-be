import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { TruckUser } from 'src/truck-user/entities/truck-user.entity';

@Entity()
export class Truck {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: new Date() })
  created_at: string

  @Column()
  model: string

  @Column()
  make: string

  @Column()
  year: string

  @Column()
  miles: number

  @Column()
  vin: string

  @Column({ nullable: true })
  note: string

  @OneToMany(() => TruckUser, truckUser => truckUser.userId)
  public TruckUser!: TruckUser[];

  // @ManyToMany(() => User, { cascade: true })
  // @JoinTable({
  //   name: 'truck_user',
  //   joinColumn: { name: 'truck_id', referencedColumnName: 'id' },
  //   inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' }
  // })
  // user: User[];
}
