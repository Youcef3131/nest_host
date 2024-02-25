import { PartialType } from '@nestjs/mapped-types';
import { FjsALert } from '../fjsAlerts.model';

export class UpdateFjsAlertDto extends PartialType(FjsALert) {}
