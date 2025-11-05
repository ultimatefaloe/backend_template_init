import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaHealthService } from '../prisma/prisma.health';

@Module({
  imports: [TerminusModule.forRoot()],
  controllers: [HealthController],
  providers: [PrismaHealthService, PrismaService],
})
export class HealthModule { }
