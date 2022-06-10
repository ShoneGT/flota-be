import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientLoadService } from './client-load.service';
import { CreateClientLoadDto } from './dto/create-client-load.dto';
import { UpdateClientLoadDto } from './dto/update-client-load.dto';

@Controller('client-load')
export class ClientLoadController {
  constructor(private readonly clientLoadService: ClientLoadService) {}

  @Post()
  create(@Body() createClientLoadDto: CreateClientLoadDto) {
    return this.clientLoadService.create(createClientLoadDto);
  }

  @Get()
  findAll() {
    return this.clientLoadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientLoadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientLoadDto: UpdateClientLoadDto) {
    return this.clientLoadService.update(+id, updateClientLoadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientLoadService.remove(+id);
  }
}
