import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Employee } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) { }

  getHello(): string {
    return 'Hello World!';
  }

  async employee(): Promise<Employee[]> {
    return this.prisma.employee.findMany()
  }
}
