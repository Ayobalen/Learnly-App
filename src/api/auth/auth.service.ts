import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import { UserToken, UserTokenDocument, UserAuth, UserAuthDocument } from 'src/api/auth/schema';
import { ITokenPayload, IUserAuth, IUserToken, PaginationQuery } from 'src/interfaces';
// import { ITokenPayload, IUserAuth, IUserToken } from 'src/interfaces';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserAuth.name)
    private readonly userAuthModel: Model<UserAuthDocument>,
    @InjectModel(UserToken.name)
    private readonly userTokenModel: Model<UserTokenDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async createAuth(userAuthData: IUserAuth) {
    const userAuth = await this.userAuthModel.create(userAuthData);
    return userAuth.populate('user');
  }

  async getUserAuth(filterQuery: FilterQuery<UserAuthDocument>) {
    const userAuth = await this.userAuthModel.findOne(filterQuery).populate('user').lean();

    return userAuth;
  }

  async updateUserAuth(
    filterQuery: FilterQuery<UserAuthDocument>,
    updateQuery: UpdateQuery<UserAuthDocument>,
    options?: QueryOptions,
  ) {
    const userAuth = await this.userAuthModel
      .findOneAndUpdate(filterQuery, updateQuery, options)
      .populate('user');

    return userAuth;
  }

  async deleteUserAuth(filterQuery: FilterQuery<UserAuthDocument>) {
    const userAuth = await this.userAuthModel.findOneAndDelete(filterQuery);
    return userAuth;
  }

  async createUserToken(tokenData: IUserToken) {
    const token = await this.userTokenModel.create(tokenData);
    return token.populate('user');
  }

  async updateUserToken(
    filterQuery: FilterQuery<UserTokenDocument>,
    updateQuery: UpdateQuery<UserTokenDocument>,
    options?: QueryOptions,
  ) {
    const token = await this.userTokenModel
      .findOneAndUpdate(filterQuery, updateQuery, options)
      .populate('user');

    return token;
  }

  async getToken(data: ITokenPayload, options: JwtSignOptions = {}) {
    return this.jwtService.sign(data, { ...options });
  }

  decode(token: string): ITokenPayload {
    return this.jwtService.decode(token) as ITokenPayload;
  }

  async deleteUserByEmail(email: string) {
    const userAuth = await this.userAuthModel.findOneAndDelete({ email });
    return userAuth;
  }
}