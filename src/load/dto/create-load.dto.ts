import { IsDateString, IsEmail, IsString, IsNotEmpty } from "class-validator"

export class CreateLoadDto {
  @IsNotEmpty()
  @IsString()
  load_id: string

  @IsNotEmpty()
  @IsString()
  pickup_address: string

  @IsNotEmpty()
  @IsString()
  delivery_address: string

  @IsNotEmpty()
  @IsDateString()
  pickup_date: Date

  @IsNotEmpty()
  @IsDateString()
  delivery_date: Date

  @IsString()
  note: string
}
