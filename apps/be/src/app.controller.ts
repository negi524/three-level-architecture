import { Controller, Get, HttpStatus } from "@nestjs/common";
import { AppService } from "./app.service";
import { Employee } from "@prisma/client";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("employee")
  @ApiOperation({ summary: "Employee情報を取得する" })
  @ApiResponse({ status: HttpStatus.OK, description: "success" })
  getEmployee(): Promise<Employee[]> {
    return this.appService.employee();
  }
}
