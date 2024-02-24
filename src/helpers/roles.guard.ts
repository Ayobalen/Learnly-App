import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly accepted_roles: string[];
  constructor(roles: string[] | string) {
    this.accepted_roles = typeof roles === 'string' ? [roles] : roles;
  }
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    if (!this.accepted_roles.length) {
      return true; // no roles required for this endpoint
    }

    const hasRequiredRole = this.accepted_roles.some((role) => req?.user?.user_type === role);
    if (!hasRequiredRole)
      throw new ForbiddenException(
        'You do not have the sufficient permission to perform this action',
      );
    return true;
  }
}
