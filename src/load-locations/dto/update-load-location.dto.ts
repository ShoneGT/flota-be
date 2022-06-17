import { PartialType } from '@nestjs/swagger';
import { CreateLoadLocationDto } from './create-load-location.dto';

export class UpdateLoadLocationDto extends PartialType(CreateLoadLocationDto) {}
