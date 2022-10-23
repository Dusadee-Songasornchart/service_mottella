import { Module } from '@nestjs/common';
import { PaymentUserController } from './payment_user.controller';
import { PaymentUserService } from './payment_user.service';

@Module({
  controllers: [PaymentUserController],
  providers: [PaymentUserService]
})
export class PaymentUserModule {}
