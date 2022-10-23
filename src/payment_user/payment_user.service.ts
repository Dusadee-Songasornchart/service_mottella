import { Injectable } from '@nestjs/common';
import { CreatePayment_user } from 'src/dto/paymentdto';
import { User_payment } from 'src/types/User';


@Injectable()
export class PaymentUserService {
    private allpayment: User_payment[] = [
        {
            Name : 'John',
            Surname : 'Smith',
            Email : 'John.sm@gmail.com',
            ComfirmEmail : 'John.sm@gmail.com',
            Number : '0857868444'
        }

    ];
    findAll(): User_payment[]{
        return this.allpayment;
    }
    postinfo(Payment_reserve : CreatePayment_user){
        this.allpayment.push(Payment_reserve);
    }
    
}
