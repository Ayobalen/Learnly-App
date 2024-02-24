import { BadRequestException, Body, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ACCESS_TOKEN_EXPIRES,
  REFRESH_TOKEN_EXPIRES,
  USER_TYPES,
} from 'src/constants';
import { UtilService } from 'src/helpers';
import { AuthService } from './auth.service';
import { UserService } from 'src/api/user/user.service';
import { UserTokenDocument } from './schema';
import moment from 'moment';
import {
  LoginDto,
  adminSignUpDto,
  userSignUpDto,
} from './dtos';
import { IResponse, ITokenPayload } from 'src/interfaces';
import { Helpers } from 'src/helpers/general.helpers';
@Injectable()
export class AuthProvider {
  myCode: any;
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
    private readonly utilService: UtilService,
    private readonly authService: AuthService,
    private readonly helper: Helpers
  ) {}

  async signUpUser(signUpDto: userSignUpDto): Promise<IResponse> {
    try {
      const checkExistedUser = await this.authService.getUserAuth({
        email: signUpDto.email,
      });
      if (checkExistedUser) {
        throw new BadRequestException('Email already registered. Please log in');
      }
      const generatedNumber = await this.helper.randomNumberGen(10);
      const user = await this.userService.createNewUser({
        ...signUpDto,
        user_type: USER_TYPES.USER,
        account_number: generatedNumber,
      });
      const user_id = user._id.toString();
      const hashedPass = await this.utilService.getHashedPwd(signUpDto.password);
      const userAuth = await this.authService.createAuth({
        email: user.email,
        phone_number: user.phone_number,
        password: hashedPass,
        user: user_id,
      });
      return {
        status: 'success',
        message: 'Account created successfully',
        data: user,
      };
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  
  async signUpAdmin(signUpDto: adminSignUpDto): Promise<IResponse> {
    try {
      const checkExistedUser = await this.authService.getUserAuth({
        email: signUpDto.email,
      });
      if (checkExistedUser) {
        throw new BadRequestException('Email already registered. Please log in');
      }
      const user = await this.userService.createNewUser({
        ...signUpDto,
        user_type: USER_TYPES.ADMIN,
      });
      const user_id = user._id.toString();
      const hashedPass = await this.utilService.getHashedPwd(signUpDto.password);
      const userAuth = await this.authService.createAuth({
        email: user.email,
        phone_number: user.phone_number,
        password: hashedPass,
        user: user_id,
      });
  
      return {
        status: 'success',
        message: 'Account created successfully',
        data: user,
      };
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  
  async login(payload: LoginDto): Promise<IResponse> {
    const auth = await this.authService.getUserAuth({
      email: payload.email,
      deleted: false,
    });
    if (!auth) {
      throw new BadRequestException('Email does not exist, please check and try again');
    }
    const checkPassword = await this.utilService.comparePassword(payload.password, auth.password);
    if (!checkPassword) {
      throw new BadRequestException('Invalid password');
    }
    const authData: Partial<ITokenPayload> = {
      email: auth.user.email,
      user_type: auth.user.user_type,
      phone_number: auth.user.phone_number,
      user: (<any>auth).user?._id.toString(),
    };
    const dataResponse = {
      ...auth.user,
    };

    const accessToken = await this.authService.getToken({
      ...authData,
      is_refresh_token: false,
      exp: moment().utc().add({ seconds: ACCESS_TOKEN_EXPIRES }).unix(),
    } as any);

    const refreshToken = await this.authService.getToken({
      ...authData,
      is_refresh_token: true,
      exp: moment().utc().add({ seconds: REFRESH_TOKEN_EXPIRES }).unix(),
    } as any);

    let userToken: UserTokenDocument;
    userToken = await this.authService.updateUserToken(
      {
        user: auth._id,
      },
      {
        access_token: accessToken,
        refresh_token: refreshToken,
      },
      {
        new: true,
      },
    );
    if (!userToken) {
      userToken = await this.authService.createUserToken({
        user: auth._id.toString(),
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    }
    const data: any = { userAuth: userToken, user: dataResponse };

    return {
      status: 'success',
      message: 'Successfully logged in',
      data: data,
    };
  }
}
