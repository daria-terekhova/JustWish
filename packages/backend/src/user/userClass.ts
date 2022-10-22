import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";
import { User } from "@just-wish/types";

export class UserClass implements User {
    @ApiProperty()
    @IsEmail()
    username: string;
    
    @ApiProperty()
    @IsNotEmpty()
    password: string;
}