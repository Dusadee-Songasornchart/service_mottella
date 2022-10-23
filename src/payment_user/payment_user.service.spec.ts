import { Test, TestingModule } from '@nestjs/testing';
import { PaymentUserService } from './payment_user.service';

describe('PaymentUserService', () => {
  let service: PaymentUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentUserService],
    }).compile();

    service = module.get<PaymentUserService>(PaymentUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
