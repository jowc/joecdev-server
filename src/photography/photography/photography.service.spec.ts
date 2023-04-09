import { Test, TestingModule } from '@nestjs/testing';
import { PhotographyService } from './photography.service';

describe('PhotographyService', () => {
  let service: PhotographyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotographyService],
    }).compile();

    service = module.get<PhotographyService>(PhotographyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
