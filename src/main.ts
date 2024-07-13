import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './contants';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.setGlobalPrefix('api');
  await app.listen(PORT);
}
bootstrap();
