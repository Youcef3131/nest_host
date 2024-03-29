import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LoginDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Req() request: Request,
    @Res() response: Response,
    @Body() loginDto: LoginDto,
  ) {
    try {
      const result = await this.authService.login(loginDto);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(500).json({ message: error });
    }
  }

  @Post('register')
  async register(
    @Req() request: Request,
    @Res() response: Response,
    @Body() createDto: RegisterUserDto,
  ) {
    try {
      const result = await this.authService.register(createDto);
      return response.status(200).json(result);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: error });
    }
  }
}
