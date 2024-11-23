import { Body, Controller, HttpStatus, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import User from 'src/user/domain/user';
import { UserService } from './user.service';
import CreateUserDto from 'src/user/createUserDto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('new')
  @ApiOperation({ summary: 'ユーザー情報を新規作成する' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'success' })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    Logger.log('createUser');
    return this.userService.createUser(
      createUserDto.name,
      createUserDto.password,
    );
  }
}
