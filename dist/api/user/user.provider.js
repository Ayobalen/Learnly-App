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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProvider = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../helpers");
const services_1 = require("../../services");
const constants_1 = require("../../constants");
let UserProvider = class UserProvider {
    constructor(userService, authService, utilService) {
        this.userService = userService;
        this.authService = authService;
        this.utilService = utilService;
    }
    async updateUsers(user, data) {
        const response = await this.userService.updateUser({
            _id: user,
        }, data, {
            new: true,
        });
        if (!response) {
            throw new common_1.NotFoundException('user not found');
        }
        return {
            status: 'success',
            message: 'User updated successfully',
            data: response,
        };
    }
    async deleteUser(user) {
        const deleteAuthUserObj = await this.authService.deleteUserAuth({ user: user });
        const email = `deleted_${user}@gmail.com`;
        const phoneNumber = Math.floor(903000000 + Math.random() * 900000);
        const deleteUserObj = await this.userService.updateUser({
            _id: user,
            deleted: false,
        }, {
            deleted: true,
            phone_number: phoneNumber,
            email,
            is_active: false,
        }, {
            new: true,
        });
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
    async getOneUser(user) {
        const Oneuser = await this.userService.getUser({ _id: user });
        if (!Oneuser) {
            throw new common_1.NotFoundException('User does not exist');
        }
        ;
        return {
            message: "User retrieved successfully",
            status: 'success',
            data: Oneuser
        };
    }
    async getUsers(query) {
        let _query = Object.assign({}, query);
        const paginationQuery = {};
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
        _query.user_type = constants_1.USER_TYPES.USER;
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
};
UserProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.UserService,
        services_1.AuthService,
        helpers_1.UtilService])
], UserProvider);
exports.UserProvider = UserProvider;
//# sourceMappingURL=user.provider.js.map