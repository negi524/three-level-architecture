import { Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserService } from './service/user.service';
import User from './domain/user';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('new')
  @ApiOperation({ summary: 'ユーザー情報を新規作成する' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'success' })
  async createUser(): Promise<User> {
    return this.userService.getUser();
  }
}
