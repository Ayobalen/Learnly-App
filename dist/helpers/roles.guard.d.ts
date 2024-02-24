import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class RolesGuard implements CanActivate {
    private readonly accepted_roles;
    constructor(roles: string[] | string);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
