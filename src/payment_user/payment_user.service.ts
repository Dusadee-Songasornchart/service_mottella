import { Injectable } from '@nestjs/common';
import {  CreatePayment_user_DTO } from 'src/dto/paymentdto';
import { User_payment } from 'src/types/User';


@Injectable()
export class PaymentUserService {
    private allpayment: User_payment[] = [
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
    findAll(): User_payment[]{
        return this.allpayment;
    }
    postinfo(Payment_reserve : CreatePayment_user_DTO){
        this.allpayment.push(Payment_reserve);
    }
    
}
