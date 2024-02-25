import { PartialType } from '@nestjs/mapped-types';
import { FjsAlert } from '../fjsAlerts.model';

export class UpdateFjsAlertDto extends PartialType(FjsAlert) {}
