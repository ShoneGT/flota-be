import { Test, TestingModule } from '@nestjs/testing';
import { TruckUserService } from './truck-user.service';

describe('TruckUserService', () => {
  let service: TruckUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TruckUserService],
    }).compile();

    service = module.get<TruckUserService>(TruckUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
