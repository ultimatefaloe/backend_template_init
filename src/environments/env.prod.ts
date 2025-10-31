import { OpenAPIObject } from '@nestjs/swagger';
import * as path from 'path';


import { IEnvironment } from "./env.interaface";

export const enviroment: IEnvironment = {
  production: Boolean(process.env.NODE_ENV) || false,
  assetsPath: path.join(__dirname, '/assets'),
  jwtSecret: process.env.JWT_SECRET || 'default',
  db_url: process.env.DATABASE_URL || 'default',
  port: Number(process.env.PORT) || 5500,
  swaggerInitializer: () => ({} as OpenAPIObject),
}