import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ServiceAccount } from 'firebase-admin';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //fire
  const adminConfig: ServiceAccount = {
    projectId: process.env['FIREBASE_PROJECT_ID'],
    privateKey: process.env['FIREBASE_PRIVATE_KEY'].replace(/\\n/g, '\n'),
    clientEmail: process.env['FIREBASE_CLIENT_EMAIL'],
  };

  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
