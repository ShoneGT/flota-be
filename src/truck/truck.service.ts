import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTruckDto } from './dto/create-truck.dto';
import { UpdateTruckDto } from './dto/update-truck.dto';
import { Truck } from './entities/truck.entity';

@Injectable()
export class TruckService {
  constructor(@InjectRepository(Truck) private repo: Repository<Truck>) { }

  create(createTruckDto: CreateTruckDto) {
    const truck = this.repo.create(createTruckDto)

    return this.repo.save(truck)
  }

  findAll() {
    return `This action returns all truck`;
  }

  findOne(id: number) {
    return `This action returns a #${id} truck`;
  }

  update(id: number, updateTruckDto: UpdateTruckDto) {
    return `This action updates a #${id} truck`;
  }

  remove(id: number) {
    return `This action removes a #${id} truck`;
  }
}
