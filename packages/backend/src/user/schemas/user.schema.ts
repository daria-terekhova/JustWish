import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User {
    @ApiProperty()
    @Prop({required: true})
    username: string;

    @ApiProperty()
    @Prop({required: true})
    password: string;

    @ApiProperty({required: false})
    @Prop()
    nameToShow: string;
}

export const UserSchema = SchemaFactory.createForClass(User)