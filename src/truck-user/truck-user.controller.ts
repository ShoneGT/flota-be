import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TruckUserService } from './truck-user.service';
import { CreateTruckUserDto } from './dto/create-truck-user.dto';
import { UpdateTruckUserDto } from './dto/update-truck-user.dto';

@Controller('truck-user')
export class TruckUserController {
  constructor(private readonly truckUserService: TruckUserService) {}

  @Post()
  create(@Body() createTruckUserDto: CreateTruckUserDto) {
    return this.truckUserService.create(createTruckUserDto);
  }

  @Get()
  findAll() {
    return this.truckUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.truckUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTruckUserDto: UpdateTruckUserDto) {
    return this.truckUserService.update(+id, updateTruckUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.truckUserService.remove(+id);
  }
}
