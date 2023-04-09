import { Test, TestingModule } from '@nestjs/testing';
import { PhotographyController } from './photography.controller';

describe('PhotographyController', () => {
  let controller: PhotographyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotographyController],
    }).compile();

    controller = module.get<PhotographyController>(PhotographyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
