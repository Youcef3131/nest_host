import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from '../authentication/dto/update-user-dto';
import { Request, Response } from 'express';
import { User } from './users.model';
import { JwtAuthGuard } from 'src/authentication/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  // @UseGuards(JwtAuthGuard)
  async findAll(@Req() request: Request, @Res() response: Response) {
    try {
      const users = await this.usersService.findAll();
      return response.status(200).json(users);
    } catch (error) {
      return response.status(404).json({ message: 'Internal Server Error !!' });
    }
  }

  @Get(':id')
  async findOne(
    @Req() request: Request,
    @Res() response: Response,
    @Param('id') id: string,
  ) {
    try {
      const user = await this.usersService.findOne(+id);
      return response.status(200).json(user);
    } catch (error) {
      return response.status(500).json({ message: 'Internal Server Error !!' });
    }
  }

  @Patch(':id')
  async update(
    @Req() request: Request,
    @Res() response: Response,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      const UpdateUser = await this.usersService.update(+id, updateUserDto);
      return response.status(200).json(UpdateUser);
    } catch (error) {
      return response.status(500).json({ message: 'Internal Server Error !!' });
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
