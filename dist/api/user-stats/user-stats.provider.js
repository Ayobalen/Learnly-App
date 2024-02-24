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
exports.UserStatProvider = void 0;
const user_stats_service_1 = require("./user-stats.service");
const common_1 = require("@nestjs/common");
let UserStatProvider = class UserStatProvider {
    constructor(userStatService) {
        this.userStatService = userStatService;
    }
    async getUserPercentage() {
        const totalUsers = await this.userStatService.getTotalUsers();
        const usersAddedLastMonth = await this.userStatService.getUsersAddedLastMonth();
        const percentageChange = totalUsers > 0 ? ((usersAddedLastMonth / totalUsers) * 100).toFixed(2) : 0;
        return {
            totalUsers,
            usersAddedLastMonth,
            percentageChange,
        };
    }
    async getActiveUserPercentage() {
        const totalActiveUsers = await this.userStatService.getActiveUsersCount();
        const activeUsersAddedLastMonth = await this.userStatService.getActiveUsersAddedLastMonth();
        const percentageChange = totalActiveUsers > 0 ? ((activeUsersAddedLastMonth / totalActiveUsers) * 100).toFixed(2) : 0;
        return {
            totalActiveUsers,
            activeUsersAddedLastMonth,
            percentageChange,
        };
    }
    async getNewUsersPercentage() {
        const usersCreatedThisMonth = await this.userStatService.getUsersCreatedThisMonth();
        const usersCreatedLastMonth = await this.userStatService.getUsersCreatedLastMonth();
        const percentageChange = usersCreatedThisMonth > 0
            ? ((usersCreatedLastMonth / usersCreatedThisMonth) * 100).toFixed(2)
            : 0;
        return {
            usersCreatedThisMonth,
            usersCreatedLastMonth,
            percentageChange,
        };
    }
    async getUsersLocationStats() {
        const locationStats = await this.userStatService.getUsersCountByCountryAndState();
        return locationStats;
    }
    async getUsersWithAppointment() {
        const userWithAppoints = await this.userStatService.findAllUsersWithAppointments();
        return userWithAppoints;
    }
    async getTotalAmount() {
        const totalAmount = await this.userStatService.getTotalAmountSpentAndPercentageChange();
        return totalAmount;
    }
    async getSpecialisationPercentage() {
        const SpecialisationPercentage = await this.userStatService.getLawyerSpecializationPercentages();
        return SpecialisationPercentage;
    }
};
UserStatProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_stats_service_1.UserStatService])
], UserStatProvider);
exports.UserStatProvider = UserStatProvider;
//# sourceMappingURL=user-stats.provider.js.map