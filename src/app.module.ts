import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletsModule } from './modules/wallets/wallets.module';

@Module({
  imports: [WalletsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
