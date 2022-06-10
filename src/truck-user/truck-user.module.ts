import { Module } from '@nestjs/common';
import { TruckUserService } from './truck-user.service';
import { TruckUserController } from './truck-user.controller';

@Module({
  controllers: [TruckUserController],
  providers: [TruckUserService]
})
export class TruckUserModule {}
