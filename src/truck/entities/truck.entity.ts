import { Entity, Column, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Exclude } from 'class-transformer';
import Role from 'src/role/entities/role.entity'
import State from 'src/state/entities/state.entity'
import City from 'src/city/entities/city.entity'
import { User } from 'src/user/entities/user.entity';

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

  @ManyToMany(() => User, { cascade: true })
  @JoinTable({
    name: 'truck_user',
    joinColumn: { name: 'truck_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' }
  })
  user: User[];
}