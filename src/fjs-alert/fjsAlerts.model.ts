import { Prisma } from '@prisma/client';

export class FjsALert implements Prisma.FjsAlertCreateInput {
  context: string;
  date: Date | string;
}
