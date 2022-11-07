import { Injectable } from '@nestjs/common';
import {  CreatePayment_user_DTO } from 'src/dto/paymentdto';
import { CreatePayment_hotel_DTO } from 'src/dto/payment_Hoteldto';
import { Hotel_payment } from 'src/types/Hotel';
import { User_payment } from 'src/types/User';



@Injectable()
export class PaymentUserService {
    private allpayment_user: User_payment[] = [
        {
            Name : 'itipi',
            Surname : 'so',
            Email : 'du@gmail.com',
            ComfirmEmail : 'itipiso@gmail.com',
            Phone : '0887987871',
            smoke : true,
            double_bed : true
        }
    ];
    private allpayment_page2 : Hotel_payment[] = [
        {
            Days : '10',
            check_in : 'TimeLike',
            check_out : 'TimeLike',
        }
    ]; 
    findAll(): User_payment[]{
        return this.allpayment_user;
    }
    findAll_Hotel(): Hotel_payment[]{
        return this.allpayment_page2
    }
    postinfo(Payment_reserve : CreatePayment_user_DTO){
        this.allpayment_user.push(Payment_reserve);
    }
    postHotel(Payment_Hotel : CreatePayment_hotel_DTO){
        this.allpayment_page2.push(Payment_Hotel)
    }
    
}
