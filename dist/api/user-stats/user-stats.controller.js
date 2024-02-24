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
exports.UserStatController = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../helpers");
const user_stats_provider_1 = require("./user-stats.provider");
let UserStatController = class UserStatController {
    constructor(userStatProvider) {
        this.userStatProvider = userStatProvider;
    }
    async getUserStats() {
        const userStats = await this.userStatProvider.getUserPercentage();
        return userStats;
    }
    async getActiveUserStats() {
        const userStats = await this.userStatProvider.getActiveUserPercentage();
        return userStats;
    }
    async getNewUserStats() {
        const userStats = await this.userStatProvider.getNewUsersPercentage();
        return userStats;
    }
    async getLocationStats() {
        const userStats = await this.userStatProvider.getUsersLocationStats();
        return userStats;
    }
    async getUsersAppointment() {
        const userAppointment = await this.userStatProvider.getUsersWithAppointment();
        return userAppointment;
    }
    async totalAmount() {
        const usersTotalAmount = await this.userStatProvider.getTotalAmount();
        return usersTotalAmount;
    }
    async specilisation() {
        const SpecialisationPercentage = await this.userStatProvider.getSpecialisationPercentage();
        return SpecialisationPercentage;
    }
};
__decorate([
    (0, common_1.Get)('/users'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserStatController.prototype, "getUserStats", null);
__decorate([
    (0, common_1.Get)('/active-users'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserStatController.prototype, "getActiveUserStats", null);
__decorate([
    (0, common_1.Get)('/new-users'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserStatController.prototype, "getNewUserStats", null);
__decorate([
    (0, common_1.Get)('/location-stats'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserStatController.prototype, "getLocationStats", null);
__decorate([
    (0, common_1.Get)('/user-appointment'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserStatController.prototype, "getUsersAppointment", null);
__decorate([
    (0, common_1.Get)('/total-amount'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserStatController.prototype, "totalAmount", null);
__decorate([
    (0, common_1.Get)('/specialisation'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserStatController.prototype, "specilisation", null);
UserStatController = __decorate([
    (0, common_1.Controller)('user-stats'),
    __metadata("design:paramtypes", [user_stats_provider_1.UserStatProvider])
], UserStatController);
exports.UserStatController = UserStatController;
//# sourceMappingURL=user-stats.controller.js.map