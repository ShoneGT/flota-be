import { PartialType } from '@nestjs/mapped-types';
import { CreateLoadTruckDto } from './create-load-truck.dto';

export class UpdateLoadTruckDto extends PartialType(CreateLoadTruckDto) {}
