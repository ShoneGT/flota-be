import { IsEmail, IsString } from 'class-validator'

export class CreateTruckDto {
  @IsString()
  created_at: string

  @IsString()
  model: string

  @IsString()
  make: string

  @IsString()
  year: string

  @IsString()
  miles: number

  @IsString()
  vin: string

  @IsString()
  note: string
}
