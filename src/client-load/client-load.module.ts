import { Module } from '@nestjs/common';
import { ClientLoadService } from './client-load.service';
import { ClientLoadController } from './client-load.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientLoad } from './entities/client-load.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientLoad])],
  controllers: [ClientLoadController],
  providers: [ClientLoadService]
})
export class ClientLoadModule { }
