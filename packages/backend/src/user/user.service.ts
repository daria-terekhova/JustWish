import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUser(id:string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async getUserByUsername(id:string): Promise<User> {
    return await this.userModel.findOne({username: id}).exec();
  }

  async createUser(userDto: User): Promise<User> {
    const newUser = new this.userModel(userDto)
    return newUser.save();
  }
}
