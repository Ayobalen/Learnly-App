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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_provider_1 = require("./user.provider");
const helpers_1 = require("../../helpers");
const dtos_1 = require("./dtos");
const schema_validators_1 = require("./schema-validators");
const constants_1 = require("../../constants");
let UserController = class UserController {
    constructor(userProvider) {
        this.userProvider = userProvider;
    }
    async getPatients(query, req) {
        const userType = req.user.user_type;
        if (userType !== constants_1.USER_TYPES.ADMIN) {
            throw new common_1.UnauthorizedException('You are not allowed');
        }
        const users = await this.userProvider.getUsers(query);
        return users;
    }
    async updateUser(updateUserDto, id) {
        return this.userProvider.updateUsers(id, updateUserDto);
    }
    async getUser(userAuth, req, id) {
        const response = await this.userProvider.getOneUser(id);
        return response;
    }
    async deleteUser(userAuth, req, user) {
        const userType = req.user.user_type;
        if (userType !== constants_1.USER_TYPES.ADMIN) {
            throw new common_1.UnauthorizedException('You are not allowed');
        }
        const response = await this.userProvider.deleteUser(user);
        return response;
    }
};
__decorate([
    (0, common_1.Get)('/users'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getPatients", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.UpdateUserSchema))),
    __param(1, (0, common_1.Param)('id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.UpdateUserDto, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, helpers_1.UserAuth)()),
    __param(2, (0, common_1.Param)('id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, helpers_1.UserAuth)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Param)('id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_provider_1.UserProvider])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map