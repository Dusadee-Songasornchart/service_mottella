import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { CreatePayment_user } from 'src/dto/paymentdto';
import { User_payment } from 'src/types/User';

import { PaymentUserService } from './payment_user.service';

@Controller('payment-user')
export class PaymentUserController {
    constructor(private paymentService: PaymentUserService){

    }
    @Get('all')
    getPaymentAll(): User_payment[]{
        return this.paymentService.findAll();
    }

    @Post('info')
    Postinfo(@Body() Payment_reserve : CreatePayment_user ){
        this.paymentService.postinfo(Payment_reserve);
    }


}
