import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from '../authentication/dto/update-user-dto';
import { PrismaService } from 'src/prisma.service';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(data: User) {
    const existing = await this.prisma.user.findUnique({
      where: {
        username: data.username,
      },
    });
    if (existing) {
      throw new ConflictException('Username already exists');
    }
    return this.prisma.user.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      return new NotFoundException('User not found');
    }
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateDto: UpdateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!existingUser) {
      throw new NotFoundException('User Not Found !!!');
    }
    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateDto,
    });
  }

  async remove(id: number) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!existingUser) {
      return new NotFoundException('User not found');
    }
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
