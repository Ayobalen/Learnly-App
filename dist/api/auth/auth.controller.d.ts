import { Response } from 'express';
import { AuthProvider } from './auth.provider';
import { LoginDto, adminSignUpDto, userSignUpDto } from './dtos';
import { IUserAuth } from 'src/interfaces';
import { UserService } from '../user/user.service';
export declare class AuthController {
    private readonly authProvider;
    private readonly userService;
    constructor(authProvider: AuthProvider, userService: UserService);
    signUpAdmin(signUpDto: adminSignUpDto): Promise<import("src/interfaces").IResponse>;
    signUpPatient(signUpDto: userSignUpDto, res: Response): Promise<import("src/interfaces").IResponse>;
    login(userAuth: IUserAuth, payload: LoginDto): Promise<import("src/interfaces").IResponse>;
}
