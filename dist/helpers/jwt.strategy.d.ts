import { Strategy } from 'passport-jwt';
import { AuthService } from 'src/services';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
}
export {};
