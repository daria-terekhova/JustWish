import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type UserDocument = UserSchemaClass & Document

@Schema()
export class UserSchemaClass {
    @Prop({required: true})
    username: string;

    @Prop({required: true})
    password: string;

    @Prop()
    nameToShow: string;
}

export const UserSchema = SchemaFactory.createForClass(UserSchemaClass)