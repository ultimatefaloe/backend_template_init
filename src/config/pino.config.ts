import { Params } from 'nestjs-pino';
import { environment } from '../environments/environment';
export const pinoConfig: Params = {
  pinoHttp: {
    level: environment.production ? 'debug' : 'info',
    transport:
      environment.production
        ? { target: 'pino-pretty', options: { colorize: true } }
        : undefined,
  },
};
