import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

import { IEnvironment } from './env.interaface';

// This file can be replaced during build by using webpack plugin.
// `nest build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `webpack.config.js`.

function swaggerInitializer(app: INestApplication): OpenAPIObject {
  const config = new DocumentBuilder()
    .setTitle('NestJS Web API')
    .setDescription('An example of NestJS')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' }, 'Authorization')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  });

  SwaggerModule.setup('api', app, document);

  return document;
}

// Load local environment variables from .env file.
const ENV = dotenv.config().parsed as unknown as NodeJS.ProcessEnv;

export const environment: IEnvironment = {
  production: Boolean(process.env.NODE_ENV) || false,
  assetsPath: 'dist/assets',
  jwtSecret: ENV.JWT_SECRET || 'default',
  db_url: ENV.DATABASE_URL || 'default',
  port: Number(ENV.PORT) || 5500,
  swaggerInitializer,
};