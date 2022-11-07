import { IsEmail,IsString,IsBooleanString,MaxLength,MinLength,IsNotEmpty,IsPhoneNumber } from "class-validator";
export class CreatePayment_hotel_DTO{
    Days : string;
    check_in : string;
    check_out : string;
}