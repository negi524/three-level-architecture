import { Injectable, Logger } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';
import User from 'src/user/domain/user';

@Injectable()
export class UserService {
  constructor() {}

  async getUser(): Promise<User> {
    const saltOrRounds = await bcryptjs.genSalt();
    const password = 'random_password';
    const hash = await bcryptjs.hash(password, saltOrRounds);
    Logger.log({ password });
    Logger.log({ hash });
    const isMatch = await bcryptjs.compare(password, hash);
    Logger.log({ isMatch });
    const user = new User(1, 'fuga');
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
