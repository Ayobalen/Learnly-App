import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { decode } from 'jsonwebtoken';
import { Req } from 'src/interfaces';

@Injectable()
export class JwtGuard implements CanActivate {
  //   constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = context.switchToHttp();
    const req: Req = ctx.getRequest();
    const accessToken = req.headers['authorization']?.split(' ')[1];

    if (!accessToken) {
      throw new UnauthorizedException('Invalid token');
    }

    const data: any = decode(accessToken);
    if (!data) {
      throw new UnauthorizedException('Invalid token');
    }
    req.user = data;
    return true;
  }
}
