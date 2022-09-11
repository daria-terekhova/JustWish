import { Body, Controller, Get, HttpCode, Param, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor (private readonly userService: UserService) {
  }

  @Get(':id')
  userInfo(@Param('id') id: string): Promise<User> {
    return this.userService.getUserByUsername(id)
  }
  
  @Put()
  @HttpCode(201)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: User,
  })
  addUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user)
  }
}
