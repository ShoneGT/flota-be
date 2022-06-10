import { Injectable } from '@nestjs/common';
import { CreateTruckUserDto } from './dto/create-truck-user.dto';
import { UpdateTruckUserDto } from './dto/update-truck-user.dto';

@Injectable()
export class TruckUserService {
  create(createTruckUserDto: CreateTruckUserDto) {
    return 'This action adds a new truckUser';
  }

  findAll() {
    return `This action returns all truckUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} truckUser`;
  }

  update(id: number, updateTruckUserDto: UpdateTruckUserDto) {
    return `This action updates a #${id} truckUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} truckUser`;
  }
}
