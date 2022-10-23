import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentUserController } from './payment_user/payment_user.controller';

import { PaymentUserModule } from './payment_user/payment_user.module';


@Module({
  imports: [PaymentUserModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
