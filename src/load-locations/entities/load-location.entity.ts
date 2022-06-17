import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import State from '../../state/entities/state.entity';
import City from '../../city/entities/city.entity';
import { Load } from '../../load/entities/load.entity';

@Entity()
export class LoadLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  status: string;

  @Column()
  type: string;

  @Column()
  date: Date;

  @Column()
  appointment_number: string;

  @Column()
  pickup_number: string;

  @Column()
  street: string;

  @Column()
  zip: number;

  @OneToOne(() => State)
  @JoinColumn()
  state: State;

  @OneToOne(() => City)
  @JoinColumn()
  city: City;

  @ManyToOne(() => Load, (load) => load.id)
  public load!: Load;
}
