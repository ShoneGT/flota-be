import { Test, TestingModule } from '@nestjs/testing';
import { LoadTruckController } from './load-truck.controller';
import { LoadTruckService } from './load-truck.service';

describe('LoadTruckController', () => {
  let controller: LoadTruckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoadTruckController],
      providers: [LoadTruckService],
    }).compile();

    controller = module.get<LoadTruckController>(LoadTruckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
