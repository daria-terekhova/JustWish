import { Body, Controller, Get, HttpCode, Param, Put, Type } from '@nestjs/common';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserClass } from './userClass';
import { UserService } from './user.service';
import { Success } from '@just-wish/types';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor (private readonly userService: UserService) {
  }
  
  @Put()
  @HttpCode(201)
  @ApiCreatedResponse({
    description: 'The record has been successfully created. Body of type Success<undefined> from common types'
  })
  @ApiConflictResponse({
    description: 'User already exists. Body of type Error from common types'
  })
  @ApiBadRequestResponse({
    description: "payload doesn't match the format"
  })
  addUser(@Body() user: UserClass): Promise<Success<undefined>> {
    return this.userService.createUser(user)
  }
}
