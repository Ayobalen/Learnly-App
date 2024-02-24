import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const UserAuth = createParamDecorator((data: string, context: ExecutionContext) => {
  const ctx = context.switchToHttp();
  const req: Request = ctx.getRequest();
  return req.user;
});
