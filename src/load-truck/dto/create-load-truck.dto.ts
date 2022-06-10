import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLoadTruckDto {
  @IsNotEmpty()
  @IsNumber()
  load: number

  @IsNotEmpty()
  @IsNumber()
  truck: number

  @IsBoolean()
  isActive: boolean
}
