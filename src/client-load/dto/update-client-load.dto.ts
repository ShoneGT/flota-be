import { PartialType } from '@nestjs/swagger';
import { CreateClientLoadDto } from './create-client-load.dto';

export class UpdateClientLoadDto extends PartialType(CreateClientLoadDto) {}
