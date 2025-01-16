import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import EmployeeRequestDto from './employeeRequestDto';
import { Employee } from '@prisma/client';
import { EmployeeService } from './employee.service';

/**
 * 従業員用のコントローラー
 */
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  @ApiOperation({ summary: 'Employee情報を取得する' })
  @ApiResponse({ status: HttpStatus.OK, description: 'success' })
  getEmployee(@Query() param: EmployeeRequestDto): Promise<Employee[]> {
    return this.employeeService.searchEmployee(param.name);
  }

  @Get('download')
  @ApiOperation({ summary: 'Employee一覧をCSVでダウンロードする' })
  @ApiResponse({ status: HttpStatus.OK, description: 'success' })
  async downloadEmployee(): Promise<string> {
    return await 'hoge';
  }
}
