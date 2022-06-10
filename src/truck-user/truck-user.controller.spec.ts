import { Test, TestingModule } from '@nestjs/testing';
import { TruckUserController } from './truck-user.controller';
import { TruckUserService } from './truck-user.service';

describe('TruckUserController', () => {
  let controller: TruckUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TruckUserController],
      providers: [TruckUserService],
    }).compile();

    controller = module.get<TruckUserController>(TruckUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
