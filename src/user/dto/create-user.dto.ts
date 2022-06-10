import { IsEmail, IsNumber, IsString, IsOptional } from 'class-validator';
import Role from '../../role/entities/role.entity'
import State from '../../state/entities/state.entity'
import City from '../../city/entities/city.entity'

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  note: string;

  @IsOptional()
  @IsString()
  dob: Date;

  @IsOptional()
  @IsNumber()
  role: Role;

  @IsOptional()
  @IsNumber()
  state: State;

  @IsOptional()
  @IsNumber()
  city: City;
}
