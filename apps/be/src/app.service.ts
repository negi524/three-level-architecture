import { Injectable } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

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
