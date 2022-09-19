import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, UserSchemaClass } from './schemas/user.schema';
import { Success, User } from '../types';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserSchemaClass.name) private userModel: Model<UserDocument>) {}

  async getUser(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async getUserByUsername(id: string): Promise<User> {
    return await this.userModel.findOne({username: id}).exec();
  }

  async createUser(userDto: User): Promise<Success<undefined>> {
    if (await this.getUserByUsername(userDto.username)) {
      throw new HttpException({response: "Error", message: "User already exists"}, HttpStatus.CONFLICT)
    }
    const newUser = new this.userModel(userDto)
    await newUser.save()
    return Promise.resolve({response: "Success", data: undefined});
  }
}
