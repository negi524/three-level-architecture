import { Injectable } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async employee(): Promise<Employee[]> {
    return this.prisma.employee.findMany();
  }
}
