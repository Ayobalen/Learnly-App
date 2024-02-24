/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import morgan = require('morgan');
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './helpers/exception.filter';
// import { WsAdapter } from '@nestjs/platform-ws';
// import { IoAdapter } from '@nestjs/platform-socket.io';
// import * as Sentry from '@sentry/node';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  // app.useWebSocketAdapter(new IoAdapter(app));
  app.useLogger(app.get(Logger));
  app.setGlobalPrefix('api/v1');
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(helmet());
  app.enableCors();
  app.use(morgan('dev'));
  await app.listen(process.env.PORT || '3005');

}
bootstrap();
