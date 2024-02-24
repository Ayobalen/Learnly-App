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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const lodash_1 = require("lodash");
const utils_service_1 = require("../../helpers/utils.service");
const schema_1 = require("./schema");
let UserService = class UserService {
    constructor(userModel, utilService) {
        this.userModel = userModel;
        this.utilService = utilService;
    }
    async createNewUser(data) {
        const user = await this.userModel.create(data);
        return user;
    }
    async getAllUsers(filterQuery, paginationQuery) {
        const count = await this.userModel.countDocuments(filterQuery);
        const { limit, offset, totalPages } = this.utilService.getPaginationData(paginationQuery, count);
        const data = (0, lodash_1.isEmpty)(paginationQuery)
            ? await this.userModel.find(filterQuery).sort({ createdAt: -1 })
            : await this.userModel.find(filterQuery).skip(offset).sort({ createdAt: -1 });
        return {
            data,
            count,
            totalPages,
        };
    }
    async getUser(filterQuery) {
        const user = await this.userModel.findOne(filterQuery);
        return user;
    }
    async updateUser(filterQuery, updateQuery, options) {
        const user = await this.userModel
            .findOneAndUpdate(filterQuery, updateQuery, options);
        return user;
    }
    async deleteUser(filterQuery) {
        const user = await this.userModel.findOneAndDelete(filterQuery);
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        utils_service_1.UtilService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map