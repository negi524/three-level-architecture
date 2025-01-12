import { Injectable } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  /**
   * 従業員を検索する
   * @param name 従業員名
   * @returns 従業員一覧
   */
  async searchEmployee(name?: string): Promise<Employee[]> {
    if (name === undefined) {
      return this.prisma.employee.findMany();
    }
    return this.prisma.employee.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }
}
