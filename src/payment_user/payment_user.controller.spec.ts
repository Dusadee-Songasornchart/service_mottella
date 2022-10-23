import { Test, TestingModule } from '@nestjs/testing';
import { PaymentUserController } from './payment_user.controller';

describe('PaymentUserController', () => {
  let controller: PaymentUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentUserController],
    }).compile();

    controller = module.get<PaymentUserController>(PaymentUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
