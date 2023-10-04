import { DocumentBuilder } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('JoecDev Rest API')
  .setDescription('Rest API for my portfolio site')
  .setVersion('1.0')
  .build();
