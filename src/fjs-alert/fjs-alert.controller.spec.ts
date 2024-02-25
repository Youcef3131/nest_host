import { Test, TestingModule } from '@nestjs/testing';
import { FjsAlertController } from './fjs-alert.controller';
import { FjsAlertService } from './fjs-alert.service';

describe('FjsAlertController', () => {
  let controller: FjsAlertController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FjsAlertController],
      providers: [FjsAlertService],
    }).compile();

    controller = module.get<FjsAlertController>(FjsAlertController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
