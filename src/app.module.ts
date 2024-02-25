import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './authentication/auth.module';
import { FjsAlertModule } from './fjs-alert/fjs-alert.module';

@Module({
  imports: [UsersModule,AuthModule, FjsAlertModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
