import { Prisma } from "@prisma/client";


export class FjsAlert implements Prisma.FjsAlertCreateInput {
    context:string;
    date: string | Date;
} 