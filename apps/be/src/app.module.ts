import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { HealthModule } from './health/health.module';
import { UsersController } from './user.controller';

@Module({
  imports: [HealthModule],
  controllers: [AppController, UsersController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
