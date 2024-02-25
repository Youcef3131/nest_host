import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login-user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/users.model';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;
    const user = await this.prismaService.user.findUnique({
      where: { username },
    });
    if (!user) {
      throw new NotFoundException('User Not Found !!!');
    }
    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      throw new NotFoundException('Invalid Password !!!');
    }
    return {
      token: this.jwtService.sign({ username }),
    };
  }
  async register(createDto: RegisterUserDto) {
    const createUser = new User();
    createUser.name = createDto.name;
    createUser.email = createDto.email;
    createUser.username = createDto.username;
    createUser.password = await bcrypt.hash(createDto.password, 10);

    const user = await this.usersService.create(createUser);

    return {
      token: this.jwtService.sign({ username: user.username }),
    };
  }
}
