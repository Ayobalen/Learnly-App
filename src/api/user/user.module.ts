import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UtilService } from 'src/helpers';
import { UserService } from 'src/services';
import { AuthModule } from '../auth/auth.module';
import {
  User,
  UserSchema,
} from './schema';
import { UserController } from './user.controller';
import { UserProvider } from './user.provider';
//import { FileExportService } from 'src/services/file.exports.service';

@Module({
  providers: [
    UserProvider,
     UserService, 
     UtilService],
  exports: [UserService],
  controllers: [UserController],
  imports: [
    forwardRef(() => AuthModule),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
})
export class UserModule {}
