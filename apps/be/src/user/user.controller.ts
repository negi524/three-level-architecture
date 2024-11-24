import { Body, Controller, Logger, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation } from "@nestjs/swagger";
import { UserService } from "./user.service";
import CreateUserDto from "./createUserDto";
import UserResponseDto from "./userResponseDto";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("new")
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
