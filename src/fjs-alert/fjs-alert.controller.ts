import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FjsAlertService } from './fjs-alert.service';
import { CreateFjsAlertDto } from './dto/create-fjs-alert.dto';
import { UpdateFjsAlertDto } from './dto/update-fjs-alert.dto';
import { FjsAlert } from './fjsAlert.model';

@Controller('fjs-alert')
export class FjsAlertController {
  constructor(private readonly fjsAlertService: FjsAlertService) {}

  @Post()
  create(@Body() createFjsAlertDto: FjsAlert) {
    return this.fjsAlertService.create(createFjsAlertDto);
  }

  @Get()
  findAll() {
    return this.fjsAlertService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fjsAlertService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFjsAlertDto: UpdateFjsAlertDto,
  ) {
    return this.fjsAlertService.update(+id, updateFjsAlertDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fjsAlertService.remove(+id);
  }
}
