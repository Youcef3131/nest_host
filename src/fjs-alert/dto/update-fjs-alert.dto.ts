import { PartialType } from '@nestjs/mapped-types';
import { FjsAlert } from '../fjsAlert.model';

export class UpdateFjsAlertDto extends PartialType(FjsAlert) {}
