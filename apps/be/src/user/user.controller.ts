import {
  Body,
  Controller,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Logger,
  Post,
} from "@nestjs/common";
import {
  ApiCreatedResponse,
  ApiExpectationFailedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
} from "@nestjs/swagger";
import { UserService } from "./user.service";
import CreateUserDto from "./createUserDto";
import UserResponseDto from "./userResponseDto";
import SigninUserDto from "./signinUserDto";
import User from "./domain/user";
import UserName from "./domain/userName";
import { PassThrough } from "stream";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("signout")
  @ApiOperation({ summary: "ユーザーのサインアウトを行う" })
  async signout() {
    // TODO: 実装
    Logger.log("signout");
  }

  @Post("signin")
  @ApiOperation({ summary: "ユーザーのサインインを行う" })
  @ApiOkResponse({
    description: "success",
    type: UserResponseDto,
  })
  @ApiForbiddenResponse({
    description: "forbidden",
    example: {
      statusCode: 403,
      message: "Forbidden",
    },
  })
  async signin(@Body() signinUserDto: SigninUserDto): Promise<UserResponseDto> {
    Logger.log("signin", { signinUserDto });
    const user: User | null = await this.userService.signinUser(
      new UserName(signinUserDto.name),
      signinUserDto.password,
    );
    if (user === null) {
      throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
    }
    return new UserResponseDto(user);
  }

  @Post("create")
  @ApiOperation({ summary: "ユーザー情報を新規作成する" })
  @ApiCreatedResponse({
    description: "created",
    type: UserResponseDto,
  })
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserResponseDto> {
    Logger.log("createUser");
    const user = await this.userService.createUser(
      createUserDto.name,
      createUserDto.password,
    );

    return new UserResponseDto(user);
  }
}
