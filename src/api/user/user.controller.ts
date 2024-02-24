import { Body, Controller, Delete, Get, Param, Post,  Req, Put, Query, UnauthorizedException, UseGuards } from '@nestjs/common';
import { UserProvider } from './user.provider';
import { IResponse, IUserAuth } from 'src/interfaces';
import { JwtGuard, MongoIDPipe, UserAuth, injectJoiSchema } from 'src/helpers';
import { UpdateUserDto } from './dtos';
import {
  UpdateUserSchema
} from './schema-validators';
import { USER_TYPES } from 'src/constants';

@Controller('users')
export class UserController {
  constructor(private readonly userProvider: UserProvider) {}

  @Get('/users')
  @UseGuards(JwtGuard)
  async getPatients(@Query() query: any, @Req() req) {
    const userType = req.user.user_type;

    if (userType !== USER_TYPES.ADMIN) {
      throw new UnauthorizedException('You are not allowed');
    }
    const users = await this.userProvider.getUsers(query);
    return users;
  }

  @Put(':id')
  @UseGuards(JwtGuard)
  async updateUser(
    @Body(injectJoiSchema(UpdateUserSchema))
    updateUserDto: UpdateUserDto,
    @Param('id', MongoIDPipe) id: string,
  ) {
    return this.userProvider.updateUsers(id, updateUserDto);
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  async getUser(@UserAuth() userAuth: IUserAuth, req, @Param('id', MongoIDPipe) id: string) {
    const response = await this.userProvider.getOneUser(id);
    return response;
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  async deleteUser(@UserAuth() userAuth: IUserAuth, @Req() req, @Param('id', MongoIDPipe) user: string) {
    const userType = req.user.user_type;

    if (userType !== USER_TYPES.ADMIN) {
      throw new UnauthorizedException('You are not allowed');
    }
    const response = await this.userProvider.deleteUser(user);
    return response;
  }
}
