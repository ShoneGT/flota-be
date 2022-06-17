import { IsDateString, IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import State from '../../state/entities/state.entity';
import City from '../../city/entities/city.entity';
import { Load } from '../../load/entities/load.entity';

export class CreateLoadLocationDto {
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsString()
  appointment_number: string;

  @IsNotEmpty()
  @IsString()
  pickup_number: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  zip: number;

  @IsOptional()
  @IsNumber()
  state: State;

  @IsOptional()
  @IsNumber()
  city: City;

  @IsNotEmpty()
  @IsNumber()
  load: Load;
}
