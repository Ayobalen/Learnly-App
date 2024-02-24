import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UtilService } from 'src/helpers';
import { IResponse, PaginationQuery } from 'src/interfaces';
import { AuthService, UserService } from 'src/services';
import { USER_TYPES } from 'src/constants';
import {
  UpdateUserDto,
} from './dtos';

@Injectable()
export class UserProvider {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly utilService: UtilService,
  ) {}

  async updateUsers(user: string, data: UpdateUserDto): Promise<IResponse> {
    const response = await this.userService.updateUser(
      {
        _id: user,
      },
      data,
      {
        new: true,
      },
    );
    if (!response) {
      throw new NotFoundException('user not found');
    }

    return {
      status: 'success',
      message: 'User updated successfully',
      data: response,
    };
  }

  async deleteUser(user: string): Promise<IResponse> {
    const deleteAuthUserObj = await this.authService.deleteUserAuth({ user: user });
    const email = `deleted_${user}@gmail.com`;
    const phoneNumber = Math.floor(903000000 + Math.random() * 900000);
    const deleteUserObj = await this.userService.updateUser(
      {
        _id: user,
        deleted: false,
      },
      {
        deleted: true,
        phone_number: phoneNumber,
        email,
        is_active: false,
      },
      {
        new: true,
      },
    );
    if (!deleteAuthUserObj || !deleteUserObj) {
      return {
        status: 'error',
        message: 'User deletion failed!',
      };
    }
    return {
      status: 'success',
      message: 'User deleted successfully!',
    };
  }

  async getOneUser(user: string): Promise<IResponse> {
    const Oneuser = await this.userService.getUser({_id: user})
    if(!Oneuser){
      throw new NotFoundException('User does not exist')
    };
    return {
      message: "User retrieved successfully",
      status: 'success',
      data: Oneuser
    }
  }

  async getUsers(query: any): Promise<IResponse> {
    let _query: any = { ...query };
    const paginationQuery: PaginationQuery = {};

    if (_query.page) {
      paginationQuery.page = Number(_query.page);
      delete _query.page;
    }

    if (_query.limit) {
      paginationQuery.limit = Number(_query.limit);
      delete _query.limit;
    }

    if (_query.search) {
      _query = { name: { $regex: _query.search, $options: 'i' } };
    }

    if (_query.status) {
      _query.status = _query.status;
    }

    if (_query.start_date && _query.end_date) {
      _query.createdAt = {
        $gte: new Date(_query.start_date),
        $lt: new Date(_query.end_date),
      };
    }
    _query.user_type = USER_TYPES.USER;
    const { count, totalPages, data } = await this.userService.getAllUsers(_query, paginationQuery);
    return {
      status: 'success',
      message: 'fetch Users successfully',
      data: data,
      meta: {
        count,
        totalPages,
      },
    };
  }
}

