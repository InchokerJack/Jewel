import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletsModule } from './modules/wallets/wallets.module';
import { ProposalModule } from './modules/proposal/proposal.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proposal } from './modules/proposal/entities/proposal.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WalletsModule,
    ProposalModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_URL,
      port: 5432,
      password: process.env.POSTGRES_PASSWORD,
      username: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DB,
      entities: [Proposal],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
