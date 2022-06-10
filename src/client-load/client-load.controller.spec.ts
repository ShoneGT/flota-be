import { Test, TestingModule } from '@nestjs/testing';
import { ClientLoadController } from './client-load.controller';
import { ClientLoadService } from './client-load.service';

describe('ClientLoadController', () => {
  let controller: ClientLoadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientLoadController],
      providers: [ClientLoadService],
    }).compile();

    controller = module.get<ClientLoadController>(ClientLoadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
