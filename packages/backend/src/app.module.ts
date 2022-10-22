import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot(process.env.JUSTWISH_MONGO_ACCESS)],
})
export class AppModule {}
