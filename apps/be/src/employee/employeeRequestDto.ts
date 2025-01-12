import { ApiProperty } from '@nestjs/swagger';

/**
 * 従業員一覧リクエスト時のリクエストパラメータ
 */
export default class EmployeeRequestDto {
  @ApiProperty({
    description: '従業員名',
    example: '山田',
  })
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
