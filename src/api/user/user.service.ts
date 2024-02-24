import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery, UpdateQuery, QueryOptions, ProjectionType } from 'mongoose';
import { isEmpty } from 'lodash';
import { UtilService } from 'src/helpers/utils.service';
import { PaginationQuery } from 'src/interfaces';
import { User, UserDocument } from './schema';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly utilService: UtilService,
  ) {}

  async createNewUser(data: any) {
    const user = await this.userModel.create(data);
    return user;
  }

  async getAllUsers(filterQuery: FilterQuery<UserDocument>, paginationQuery?: PaginationQuery) {
    const count = await this.userModel.countDocuments(filterQuery);
    const { limit, offset, totalPages } = this.utilService.getPaginationData(
      paginationQuery,
      count,
    );

    const data = isEmpty(paginationQuery)
      ? await this.userModel.find(filterQuery).sort({ createdAt: -1 })
      : await this.userModel.find(filterQuery).skip(offset).sort({ createdAt: -1 });
    return {
      data,
      count,
      totalPages,
    };
  }

  async getUser(filterQuery: FilterQuery<UserDocument>) {
    const user = await this.userModel.findOne(filterQuery);
    return user;
  }

  async updateUser(
    filterQuery: FilterQuery<UserDocument>,
    updateQuery: UpdateQuery<UserDocument>,
    options?: QueryOptions,
  ) {
    const user = await this.userModel
      .findOneAndUpdate(filterQuery, updateQuery, options)
    return user;
  }

  async deleteUser(filterQuery: FilterQuery<UserDocument>) {
    const user = await this.userModel.findOneAndDelete(filterQuery);
    return user;
  }
}
