"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("./schema");
let AuthService = class AuthService {
    constructor(userAuthModel, userTokenModel, jwtService) {
        this.userAuthModel = userAuthModel;
        this.userTokenModel = userTokenModel;
        this.jwtService = jwtService;
    }
    async createAuth(userAuthData) {
        const userAuth = await this.userAuthModel.create(userAuthData);
        return userAuth.populate('user');
    }
    async getUserAuth(filterQuery) {
        const userAuth = await this.userAuthModel.findOne(filterQuery).populate('user').lean();
        return userAuth;
    }
    async updateUserAuth(filterQuery, updateQuery, options) {
        const userAuth = await this.userAuthModel
            .findOneAndUpdate(filterQuery, updateQuery, options)
            .populate('user');
        return userAuth;
    }
    async deleteUserAuth(filterQuery) {
        const userAuth = await this.userAuthModel.findOneAndDelete(filterQuery);
        return userAuth;
    }
    async createUserToken(tokenData) {
        const token = await this.userTokenModel.create(tokenData);
        return token.populate('user');
    }
    async updateUserToken(filterQuery, updateQuery, options) {
        const token = await this.userTokenModel
            .findOneAndUpdate(filterQuery, updateQuery, options)
            .populate('user');
        return token;
    }
    async getToken(data, options = {}) {
        return this.jwtService.sign(data, Object.assign({}, options));
    }
    decode(token) {
        return this.jwtService.decode(token);
    }
    async deleteUserByEmail(email) {
        const userAuth = await this.userAuthModel.findOneAndDelete({ email });
        return userAuth;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.UserAuth.name)),
    __param(1, (0, mongoose_1.InjectModel)(schema_1.UserToken.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map