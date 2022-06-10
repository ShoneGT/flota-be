import { Test, TestingModule } from '@nestjs/testing';
import { ClientLoadService } from './client-load.service';

describe('ClientLoadService', () => {
  let service: ClientLoadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientLoadService],
    }).compile();

    service = module.get<ClientLoadService>(ClientLoadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
