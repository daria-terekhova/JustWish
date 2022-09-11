import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { User, UserSchema } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor (private readonly userService: UserService) {
  }

  @Get(':id')
  userInfo(@Param('id') id: string): Promise<User> {
    return this.userService.getUserByUsername(id)
  }

  @Put()
  addUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user)
  }
}
