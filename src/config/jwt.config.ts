import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export class JwtConfig {
  constructor(private _configService: ConfigService) {}
  getConfig(): JwtModuleOptions {
    return {
      secret: this._configService.get('JWT_SECRET'),
      signOptions: {
        expiresIn: '1d',
      },
    };
  }
}
