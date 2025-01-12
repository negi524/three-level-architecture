import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Employee } from '@prisma/client';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import EmployeeRequestDto from './employee/employeeRequestDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('employee')
  @ApiOperation({ summary: 'Employee情報を取得する' })
  @ApiResponse({ status: HttpStatus.OK, description: 'success' })
  getEmployee(@Query() param: EmployeeRequestDto): Promise<Employee[]> {
    return this.appService.searchEmployee(param.name);
  }
}
