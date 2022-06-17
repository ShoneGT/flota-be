import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoadLocationsService } from './load-locations.service';
import { CreateLoadLocationDto } from './dto/create-load-location.dto';
import { UpdateLoadLocationDto } from './dto/update-load-location.dto';

@Controller('load-locations')
export class LoadLocationsController {
  constructor(private readonly loadLocationsService: LoadLocationsService) {}

  @Post()
  create(@Body() createLoadLocationDto: CreateLoadLocationDto) {
    return this.loadLocationsService.create(createLoadLocationDto);
  }

  @Get()
  findAll() {
    return this.loadLocationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loadLocationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoadLocationDto: UpdateLoadLocationDto) {
    return this.loadLocationsService.update(+id, updateLoadLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loadLocationsService.remove(+id);
  }
}
