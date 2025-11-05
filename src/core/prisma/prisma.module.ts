import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { PrismaHealthService } from "./prisma.health";

@Global()
@Module({
  imports:[],
  providers: [
    PrismaService,
    PrismaHealthService
  ]
})

export class PrismaModule {}