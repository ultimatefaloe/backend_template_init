import { Module } from '@nestjs/common';
import { collectDefaultMetrics, Registry } from 'prom-client';

@Module({
  providers: [
    {
      provide: 'PROM_REGISTRY',
      useFactory: () => {
        const register = new Registry();
        collectDefaultMetrics({ register });
        return register;
      },
    },
  ],
  exports: ['PROM_REGISTRY'],
})
export class MetricsModule {}
