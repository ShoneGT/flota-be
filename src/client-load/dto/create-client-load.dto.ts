import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateClientLoadDto {
  @IsNotEmpty()
  @IsNumber()
  load: number

  @IsNotEmpty()
  @IsNumber()
  client: number

  @IsBoolean()
  isActive: boolean
}
