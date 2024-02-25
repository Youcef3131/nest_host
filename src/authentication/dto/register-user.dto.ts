import { IsEmail, IsString, Length } from "class-validator";



export class RegisterUserDto {
    @IsString()
    @Length(5,10)
    name: string;
    @IsString()
    @Length(5,10)
    username: string;
    @IsEmail()
    @Length(5,10)
    email: string;
    @IsString()
    @Length(6,12)
    password: string;
}