import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoadTruckDto } from './dto/create-load-truck.dto';
import { UpdateLoadTruckDto } from './dto/update-load-truck.dto';
import { LoadTruck } from './entities/load-truck.entity';


@Injectable()
export class LoadTruckService {
  constructor(@InjectRepository(LoadTruck) private repo: Repository<LoadTruck>) { }

  create(createLoadTruckDto) {
    const loadTruck = this.repo.create(createLoadTruckDto)

    return this.repo.save(loadTruck)
  }

  findAll() {
    return this.repo.find({ relations: ['load', 'truck'] })
  }

  async findOne(id: number) {
    // return this.repo.findOne({ relations: []})
    const res = await this.repo.findOne({
      relations: [],
      where: {
        load: id,
      },
    })

    if (res) {
      return res
    }

    throw new NotFoundException(id)
  }

  update(id: number, updateLoadTruckDto: UpdateLoadTruckDto) {
    return `This action updates a #${id} loadTruck`;
  }

  remove(id: number) {
    return `This action removes a #${id} loadTruck`;
  }
}
