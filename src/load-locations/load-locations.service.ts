import { Injectable } from '@nestjs/common';
import { CreateLoadLocationDto } from './dto/create-load-location.dto';
import { UpdateLoadLocationDto } from './dto/update-load-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LoadLocation } from './entities/load-location.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoadLocationsService {
  constructor(
    @InjectRepository(LoadLocation) private repo: Repository<LoadLocation>,
  ) {}

  create(createLoadLocationDto: CreateLoadLocationDto) {
    const loadLocations = this.repo.create(createLoadLocationDto);

    return this.repo.save(loadLocations);
  }

  findAll() {
    return this.repo.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} loadLocation`;
  }

  update(id: number, updateLoadLocationDto: UpdateLoadLocationDto) {
    return `This action updates a #${id} loadLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} loadLocation`;
  }
}
