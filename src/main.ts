import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import helmet from 'helmet';
import { SwaggerModule } from '@nestjs/swagger';

import { config as swaggerConfig } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: ['localhost:3000', 'https://joecdev.com'] });
  app.use(helmet());

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger-api', app, document);

  await app.listen(3000);
}
bootstrap();
