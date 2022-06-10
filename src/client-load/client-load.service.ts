import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientLoadDto } from './dto/create-client-load.dto';
import { UpdateClientLoadDto } from './dto/update-client-load.dto';
import { ClientLoad } from './entities/client-load.entity';

@Injectable()
export class ClientLoadService {
  constructor(@InjectRepository(ClientLoad) private repo: Repository<ClientLoad>) { }

  create(createClientLoadDto) {
    const clientLoad = this.repo.create(createClientLoadDto)

    return this.repo.save(clientLoad)
  }

  findAll() {
    return this.repo.find({ relations: ['load', 'client'] })
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

  update(id: number, updateClientLoadDto: UpdateClientLoadDto) {
    return `This action updates a #${id} clientLoad`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientLoad`;
  }
}
