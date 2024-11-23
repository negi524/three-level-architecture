import { Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import User from 'src/user/domain/user';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('new')
  @ApiOperation({ summary: 'ユーザー情報を新規作成する' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'success' })
  async createUser(): Promise<User> {
    return this.userService.getUser();
  }
}
