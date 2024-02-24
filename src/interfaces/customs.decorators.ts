import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Req } from 'src/interfaces';

export const Auth = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const ctx = context.switchToHttp();
  const req: Req = ctx.getRequest();
  return { userId: req.auth?._id, store: req.auth?.store?._id };
});
