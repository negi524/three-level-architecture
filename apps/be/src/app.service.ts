import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { employee } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) { }

  getHello(): string {
    return 'Hello World!';
  }

  async employee(): Promise<employee[]> {
    return this.prisma.employee.findMany()
  }
}
