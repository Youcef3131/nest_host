import { PartialType } from '@nestjs/mapped-types';
import { CreateFjsAlertDto } from './create-fjs-alert.dto';

export class UpdateFjsAlertDto extends PartialType(CreateFjsAlertDto) {}
