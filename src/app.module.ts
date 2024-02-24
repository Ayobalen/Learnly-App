/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TwilioModule } from 'nestjs-twilio';
import { NODE_ENV, ENV } from './constants';
import { AuthModule } from './api/auth/auth.module';
import { UserModule } from './api/user/user.module';
import { TransactionModule } from './api/transaction/transaction.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    TransactionModule,

    LoggerModule.forRoot(),
    ConfigModule.forRoot({isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === NODE_ENV.PROD
          ? '.prod.env'
          : process.env.NODE_ENV === NODE_ENV.STAGING
          ? '.staging.env'
          : '.dev.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get(ENV.MONGO_URI),
      }),
    }),
  ],
})
export class AppModule {}
