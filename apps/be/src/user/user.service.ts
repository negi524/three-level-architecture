import { Injectable, Logger } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';
import User from 'src/user/domain/user';

@Injectable()
export class UserService {
  constructor() {}

  async createUser(userName: string, password: string): Promise<User> {
    const saltOrRounds = await bcryptjs.genSalt();
    const hash = await bcryptjs.hash(password, saltOrRounds);
    Logger.log({ password });
    Logger.log({ hash });
    const isMatch = await bcryptjs.compare(password, hash);
    Logger.log({ isMatch });
    const user = new User(1, userName);
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
