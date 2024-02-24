/* eslint-disable prettier/prettier */
// import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-local';
// import { LoginDto } from 'src/api/auth/dtos';
// import { LoginSchema } from 'src/api/auth/schema-validators';
// import { UserStatus } from 'src/constants';
// import { AuthService } from 'src/services';
// import { UtilService } from './utils.service';

// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy) {
//   constructor(
//     private readonly authService: AuthService,
//     private readonly utilService: UtilService,
//   ) {
//     super({
//       passwordField: 'password',
//       usernameField: 'identifier',
//     });
//   }

//   async validate(identifier: string, password: string) {
//     const data: LoginDto = {
//       identifier,
//       password,
//     };

//     const { error, value } = LoginSchema.validate(data);
//     if (error) {
//       throw new BadRequestException(error.message);
//     }

//     const userAuth = await this.authService.getUserAuth({
//       $or: [
//         {
//           email: { $regex: new RegExp(value.identifier, 'i') },
//         },
//         {
//           phone_number: value.identifier,
//         },
//       ],
//     });

//     if (!userAuth) {
//       throw new UnauthorizedException('Invalid identifier or password');
//     }
//     if (userAuth.user?.status !== UserStatus.ACTIVE) {
//       throw new UnauthorizedException("Account doesn't have access to login, contact admin");
//     }
//     const isValid = await this.utilService.comparePassword(value.password, userAuth.password);

//     if (!isValid) {
//       throw new UnauthorizedException('Invalid identifier or password');
//     }
//     return userAuth;
//   }
// }
