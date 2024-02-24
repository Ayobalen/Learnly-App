import { Body, Controller, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { injectJoiSchema, UserAuth } from '../../helpers';
import { AuthProvider } from './auth.provider';
import { LoginDto, adminSignUpDto, userSignUpDto } from './dtos';
import { AdminSignUpSchema, LoginSchema, userSignUpSchema } from './schema-validators';
import { IUserAuth } from 'src/interfaces';
import { UserService } from '../user/user.service';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly authProvider: AuthProvider,
    private readonly userService: UserService,
  ) {}

  @Post('/admin')
  async signUpAdmin(
    @Body(injectJoiSchema(AdminSignUpSchema))
    signUpDto: adminSignUpDto,
  ) {
    const data = await this.authProvider.signUpAdmin(signUpDto);
    return data;
  }

  @Post('/user')
  async signUpPatient(
    @Body(injectJoiSchema(userSignUpSchema))
    signUpDto: userSignUpDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const data = await this.authProvider.signUpUser(signUpDto);
    res.status(HttpStatus.OK);
    return data;
  }

  @Post('login')
  async login(
    @UserAuth() userAuth: IUserAuth,
    @Body(injectJoiSchema(LoginSchema)) payload: LoginDto,
  ) {
    const data = await this.authProvider.login(payload);
    return data;
  }
}
