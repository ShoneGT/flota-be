import { Test, TestingModule } from '@nestjs/testing';
import { LoadLocationsService } from './load-locations.service';

describe('LoadLocationsService', () => {
  let service: LoadLocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoadLocationsService],
    }).compile();

    service = module.get<LoadLocationsService>(LoadLocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
