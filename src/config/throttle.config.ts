import { ThrottlerModuleOptions } from '@nestjs/throttler';

export class ThrottleConfig {
  getConfig(): ThrottlerModuleOptions {
    return [
      {
        ttl: 60000,
        limit: 20,
      },
    ];
  }
}
