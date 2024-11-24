import { Injectable, Logger } from "@nestjs/common";
import * as bcryptjs from "bcryptjs";
import { PrismaService } from "src/prisma/prisma.service";
import User from "src/user/domain/user";

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async createUser(userName: string, password: string): Promise<User> {
    const saltOrRounds = await bcryptjs.genSalt();
    const hash = await bcryptjs.hash(password, saltOrRounds);

    const response = await this.prismaService.account.create({
      data: {
        userName: userName,
        passwordHash: hash,
        salt: saltOrRounds,
      },
    });
    const user = new User(response.userId, response.userName);
    Logger.log({ user });
    return new Promise((resolve, reject) => {
      const success = true;
      if (success) {
        return resolve(user);
      } else {
        return reject(user);
      }
    });
  }
}
