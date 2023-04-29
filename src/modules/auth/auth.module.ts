import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'MyFirstJwtTokenIn2023',
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, LocalAuthGuard, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
