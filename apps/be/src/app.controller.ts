import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { employee } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('employee')
  getEmployee(): Promise<employee[]> {
    return this.appService.employee()
  }
}
