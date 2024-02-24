/* eslint-disable prettier/prettier */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JWT_SECRET } from 'src/constants';
import { ITokenPayload } from 'src/interfaces';
import { AuthService } from 'src/services';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
    });
  }

  // async validate(payload: ITokenPayload) {
  //   const userAuth = await this.authService.getUserAuth({
  //     user: payload.user,
  //   });
  //   return userAuth;
  // }
}
