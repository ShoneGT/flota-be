import { PartialType } from '@nestjs/mapped-types';
import { CreateTruckUserDto } from './create-truck-user.dto';

export class UpdateTruckUserDto extends PartialType(CreateTruckUserDto) {}
