import { INestApplication } from '@nestjs/common';
import { OpenAPIObject } from '@nestjs/swagger';

export interface IEnvironment {
  production: boolean;
  assetsPath: string;
  jwtSecret: string;
  db_url: string;
  port: number
  // You can uncomment these if you want to use individual DB connection params
  // dbHost?: string;
  // dbName?: string;
  // dbPassword?: string;
  // dbPort?: number;
  // dbUsername?: string;
  swaggerInitializer: (app: INestApplication) => OpenAPIObject;
}
