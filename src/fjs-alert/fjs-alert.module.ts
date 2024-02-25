import { Module } from '@nestjs/common';
import { FjsAlertService } from './fjs-alert.service';
import { FjsAlertController } from './fjs-alert.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FjsAlertController],
  providers: [FjsAlertService,PrismaService],
})
export class FjsAlertModule {}
