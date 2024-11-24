import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import CreateUserDto from './createUserDto';
import UserResponseDto from './userResponseDto';
import SigninUserDto from './signinUserDto';
import User from './domain/user';
import UserName from './domain/userName';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiOperation({ summary: 'ユーザー情報を取得する' })
  @ApiOkResponse({ description: 'success', type: UserResponseDto })
  @ApiNotFoundResponse({
    description: 'NotFound',
    example: { statusCode: 404, message: 'NotFound' },
  })
  async getUser(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserResponseDto> {
    Logger.log('getUser', { id: id });
    const user = await this.userService.getUser(id);
    if (user === null) {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }
    return new UserResponseDto(user);
  }

  @Post('signin')
  @ApiOperation({ summary: 'ユーザーのサインインを行う' })
  @HttpCode(200)
  @ApiOkResponse({ description: 'success', type: UserResponseDto })
  @ApiForbiddenResponse({
    description: 'Forbidden',
    example: { statusCode: 403, message: 'Forbidden' },
  })
  async signin(@Body() signinUserDto: SigninUserDto): Promise<UserResponseDto> {
    Logger.log('signin', { signinUserDto });
    const user: User | null = await this.userService.signinUser(
      new UserName(signinUserDto.name),
      signinUserDto.password,
    );
    if (user === null) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return new UserResponseDto(user);
  }

  @Post('create')
  @ApiOperation({ summary: 'ユーザー情報を新規作成する' })
  @ApiCreatedResponse({ description: 'created', type: UserResponseDto })
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserResponseDto> {
    Logger.log('createUser');
    const user = await this.userService.createUser(
      createUserDto.name,
      createUserDto.password,
    );

    return new UserResponseDto(user);
  }
}
