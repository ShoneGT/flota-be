import { IsString, IsNotEmpty, IsEmail, IsNumber } from "class-validator";

export class CreateClientDto {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsNumber()
  client_score: number

  @IsString()
  address: string

  @IsString()
  phone: string

  @IsString()
  note: string
}
