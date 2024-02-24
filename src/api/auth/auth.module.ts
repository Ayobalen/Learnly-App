import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthProvider } from './auth.provider';
import { JWT_SECRET } from 'src/constants';
import { UserModule } from 'src/api/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from 'src/services';
import { UserAuth, UserAuthSchema, UserToken, UserTokenSchema } from './schema';
import { UtilService } from 'src/helpers';
import { User, UserSchema } from '../user/schema';
import { Helpers } from 'src/helpers/general.helpers';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.register({ secret: JWT_SECRET }),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: UserToken.name,
        schema: UserTokenSchema,
      },
      {
        name: UserAuth.name,
        schema: UserAuthSchema,
      },
    ]),
  ],
  providers: [AuthProvider, AuthService, UtilService, Helpers],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
