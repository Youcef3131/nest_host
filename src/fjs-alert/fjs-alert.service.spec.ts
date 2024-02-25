import { Test, TestingModule } from '@nestjs/testing';
import { FjsAlertService } from './fjs-alert.service';

describe('FjsAlertService', () => {
  let service: FjsAlertService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FjsAlertService],
    }).compile();

    service = module.get<FjsAlertService>(FjsAlertService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
