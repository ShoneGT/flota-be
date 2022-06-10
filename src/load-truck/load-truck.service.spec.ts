import { Test, TestingModule } from '@nestjs/testing';
import { LoadTruckService } from './load-truck.service';

describe('LoadTruckService', () => {
  let service: LoadTruckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoadTruckService],
    }).compile();

    service = module.get<LoadTruckService>(LoadTruckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
