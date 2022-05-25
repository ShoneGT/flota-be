import { Module } from '@nestjs/common';
import { TruckService } from './truck.service';
import { TruckController } from './truck.controller';
import { Truck } from './entities/truck.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Truck])],
  controllers: [TruckController],
  providers: [TruckService]
})
export class TruckModule { }
