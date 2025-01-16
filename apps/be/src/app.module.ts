import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [HealthModule, PrismaModule, UserModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
