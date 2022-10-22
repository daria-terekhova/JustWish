import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, UserSchemaClass } from './schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [MongooseModule.forFeature([{name: UserSchemaClass.name, schema: UserSchema}])],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
