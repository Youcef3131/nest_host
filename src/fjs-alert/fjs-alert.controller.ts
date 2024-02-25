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
} from '@nestjs/common';
import { FjsAlertService } from './fjs-alert.service';
import { CreateFjsAlertDto } from './dto/create-fjs-alert.dto';
import { UpdateFjsAlertDto } from './dto/update-fjs-alert.dto';
import { FjsALert } from './fjsAlerts.model';
import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';

@Controller('fjsalert')
export class FjsAlertController {
  constructor(private readonly fjsAlertService: FjsAlertService) {}

  @Post()
  async create(
    @Req() request: Request,
    @Res() response: Response,
    @Body() createFjsAlertDto: Prisma.FjsAlertCreateInput,
  ) {
    try {
      const fjsALert = await this.fjsAlertService.create(createFjsAlertDto);
      return response.status(200).json(fjsALert);
    } catch (error) {
      return response.status(500).json({ message: error });
    }
  }

  @Get()
  findAll() {
    return this.fjsAlertService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fjsAlertService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateFjsAlertDto: UpdateFjsAlertDto,
  // ) {
  //   return this.fjsAlertService.update(+id, updateFjsAlertDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fjsAlertService.remove(+id);
  }
}
