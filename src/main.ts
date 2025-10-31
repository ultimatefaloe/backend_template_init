import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { log } from 'console';
import { environment } from './environments/environment';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

   if (!environment.production) {
    environment.swaggerInitializer(app);
  }

  app.useLogger(app.get(Logger)); 
  app.use(helmet());
  app.enableCors();

  await app.listen(environment.port);
  log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
