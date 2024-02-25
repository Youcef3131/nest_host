import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaService } from "src/prisma.service";
import { JwtStrategy } from './jwt.strategy';
import { JwtModule} from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";
import { UsersModule } from "src/users/users.module";
import { PassportModule } from "@nestjs/passport";


@Module({
    controllers: [AuthController],
    providers: [AuthService,PrismaService,JwtStrategy,UsersService],
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        
        })
    ]
  })
  export class AuthModule {}