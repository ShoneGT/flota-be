import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLoadDto } from './dto/create-load.dto';
import { UpdateLoadDto } from './dto/update-load.dto';
import { Load } from './entities/load.entity';

@Injectable()
export class LoadService {
  constructor(@InjectRepository(Load) private repo: Repository<Load>) {}

  create(createLoadDto: CreateLoadDto) {
    const load = this.repo.create(createLoadDto);

    return this.repo.save(load);
  }

  findAll() {
    return this.repo.find({ relations: ['loadLocations'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} load`;
  }

  update(id: number, updateLoadDto: UpdateLoadDto) {
    return `This action updates a #${id} load`;
  }

  remove(id: number) {
    return `This action removes a #${id} load`;
  }
}
