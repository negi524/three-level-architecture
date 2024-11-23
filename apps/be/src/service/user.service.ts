import { Injectable } from '@nestjs/common';
import User from 'src/domain/user';

@Injectable()
export class UserService {
  constructor() {}

  async getUser(): Promise<User> {
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
