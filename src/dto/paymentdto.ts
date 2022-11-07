import { IsEmail,IsString,IsBooleanString,MaxLength,MinLength,IsNotEmpty,IsPhoneNumber } from "class-validator";
import { check_email } from "./check_email";
import { isBooleanObject } from "util/types";

export class CreatePayment_user_DTO{
    
    @IsString()
    @IsNotEmpty()
    Name : string;
    @IsString()
    @IsNotEmpty()
    Surname : string;
    @IsEmail()
    Email : string;
    @check_email('Email', {message: 'please check you Email'})
    ComfirmEmail :string;
    @IsPhoneNumber('TH')
    Phone : string;
    @IsBooleanString()
    smoke : boolean;
    @IsBooleanString()
    double_bed : boolean;
    
}