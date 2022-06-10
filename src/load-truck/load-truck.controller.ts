import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoadTruckService } from './load-truck.service';
import { CreateLoadTruckDto } from './dto/create-load-truck.dto';
import { UpdateLoadTruckDto } from './dto/update-load-truck.dto';

@Controller('load-truck')
export class LoadTruckController {
  constructor(private readonly loadTruckService: LoadTruckService) {}

  @Post()
  create(@Body() createLoadTruckDto: CreateLoadTruckDto) {
    return this.loadTruckService.create(createLoadTruckDto);
  }

  @Get()
  findAll() {
    return this.loadTruckService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loadTruckService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoadTruckDto: UpdateLoadTruckDto) {
    return this.loadTruckService.update(+id, updateLoadTruckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loadTruckService.remove(+id);
  }
}
