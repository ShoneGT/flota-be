import { Test, TestingModule } from '@nestjs/testing';
import { LoadLocationsController } from './load-locations.controller';
import { LoadLocationsService } from './load-locations.service';

describe('LoadLocationsController', () => {
  let controller: LoadLocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoadLocationsController],
      providers: [LoadLocationsService],
    }).compile();

    controller = module.get<LoadLocationsController>(LoadLocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
