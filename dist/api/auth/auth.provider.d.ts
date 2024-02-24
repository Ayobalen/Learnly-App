import { ConfigService } from '@nestjs/config';
import { UtilService } from 'src/helpers';
import { AuthService } from './auth.service';
import { UserService } from 'src/api/user/user.service';
import { LoginDto, adminSignUpDto, userSignUpDto } from './dtos';
import { IResponse } from 'src/interfaces';
import { Helpers } from 'src/helpers/general.helpers';
export declare class AuthProvider {
    private readonly userService;
    private readonly configService;
    private readonly utilService;
    private readonly authService;
    private readonly helper;
    myCode: any;
    constructor(userService: UserService, configService: ConfigService, utilService: UtilService, authService: AuthService, helper: Helpers);
    signUpUser(signUpDto: userSignUpDto): Promise<IResponse>;
    signUpAdmin(signUpDto: adminSignUpDto): Promise<IResponse>;
    login(payload: LoginDto): Promise<IResponse>;
}
