import {
  Controller,
  Get,
  HttpStatus,
  Query,
  StreamableFile,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiProduces,
  ApiResponse,
} from '@nestjs/swagger';
import EmployeeRequestDto from './employeeRequestDto';
import { Employee } from '@prisma/client';
import { EmployeeService } from './employee.service';
import * as csv from '@fast-csv/format';

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
  @ApiProduces('text/csv; charset=utf-8')
  @ApiOperation({ summary: 'Employee一覧をCSVでダウンロードする' })
  @ApiOkResponse({
    description: 'success',
    example: 'id,name\nhoge,fuga',
  })
  async downloadEmployee(): Promise<StreamableFile> {
    const employees = this.employeeService.fetchAllEmployee();
    const rows = [
      ['a', 'b'],
      ['a1', 'b1'],
      ['a2', 'b2'],
    ];
    const csvBuffer = await csv.writeToBuffer(rows);
    return new StreamableFile(csvBuffer, {
      type: 'text/csv',
      disposition: 'attachment; filename="employees.csv"',
      // If you want to define the Content-Length value to another value instead of file's length:
      // length: 123,
    });
  }
}
