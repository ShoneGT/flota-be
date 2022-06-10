import { Module } from '@nestjs/common';
import { LoadTruckService } from './load-truck.service';
import { LoadTruckController } from './load-truck.controller';
import { LoadTruck } from './entities/load-truck.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([LoadTruck])],
  controllers: [LoadTruckController],
  providers: [LoadTruckService]
})
export class LoadTruckModule { }
