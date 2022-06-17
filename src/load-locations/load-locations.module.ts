import { Module } from '@nestjs/common';
import { LoadLocationsService } from './load-locations.service';
import { LoadLocationsController } from './load-locations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoadLocation } from './entities/load-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoadLocation])],
  controllers: [LoadLocationsController],
  providers: [LoadLocationsService],
})
export class LoadLocationsModule {}
