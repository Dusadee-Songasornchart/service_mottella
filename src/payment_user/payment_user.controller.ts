import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import {  CreatePayment_user_DTO } from 'src/dto/paymentdto';
import { CreatePayment_hotel_DTO } from 'src/dto/payment_Hoteldto';
import { Hotel_payment } from 'src/types/Hotel';
import { User_payment } from 'src/types/User';

import { PaymentUserService } from './payment_user.service';

@Controller('payment-user')
export class PaymentUserController {
    constructor(private paymentService: PaymentUserService){

    }
    @Get('check_page1')
    getPaymentAll(): User_payment[]{
        return this.paymentService.findAll();
    }

    @Post('reserve')
    Postinfo(@Body() Payment_reserve : CreatePayment_user_DTO ){
        this.paymentService.postinfo(Payment_reserve);
    }

    @Get('check_page2')
    GetHotelAll(): Hotel_payment[]{
        return this.paymentService.findAll_Hotel();
    }
    @Post('hotel_payment')
    PostHotel(@Body() Payment_Hotel : CreatePayment_hotel_DTO){
        this.paymentService.postHotel(Payment_Hotel);
    }
    

}
