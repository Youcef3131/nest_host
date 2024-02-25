import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFjsAlertDto } from './dto/create-fjs-alert.dto';
import { UpdateFjsAlertDto } from './dto/update-fjs-alert.dto';
import { PrismaService } from 'src/prisma.service';
import { FjsAlert } from './fjsAlert.model';

@Injectable()
export class FjsAlertService {
  constructor(private prisma: PrismaService) {}
  async create(data: FjsAlert) {
    return this.prisma.fjsAlert.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.fjsAlert.findMany();
  }

  async findOne(id: number) {
    const fjsALert = await this.prisma.fjsAlert.findUnique({
      where: {
        id,
      },
    });
    if (!fjsALert) {
      return new NotFoundException('FjsAlert not found');
    }
    return this.prisma.fjsAlert.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateFjsAlertDto: UpdateFjsAlertDto) {
    const existingFjsAlert = await this.prisma.fjsAlert.findUnique({
      where: {
        id,
      },
    });
    if (!existingFjsAlert) {
      throw new NotFoundException('FjsAlert Not Found !!!');
    }
    return this.prisma.fjsAlert.update({
      where: {
        id,
      },
      data: updateFjsAlertDto,
    });
  }

  async remove(id: number) {
    return this.prisma.fjsAlert.delete({
      where: {
        id,
      },
    });
  }
}
