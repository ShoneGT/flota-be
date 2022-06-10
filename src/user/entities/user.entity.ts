import {
  Entity,
  Column,
  JoinColumn,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import Role from 'src/role/entities/role.entity';
import State from 'src/state/entities/state.entity';
import City from 'src/city/entities/city.entity';
import { TruckUser } from 'src/truck-user/entities/truck-user.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: new Date() })
  created_at: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ unique: true, nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  note: string;

  @Column({ nullable: true })
  dob: Date;

  @OneToOne(() => Role)
  @JoinColumn()
  role: Role;

  @OneToOne(() => State)
  @JoinColumn()
  state: State;

  @OneToOne(() => City)
  @JoinColumn()
  city: City;

  @OneToMany(() => TruckUser, (truckUser) => truckUser.truckId)
  public TruckUser!: TruckUser[];
}
