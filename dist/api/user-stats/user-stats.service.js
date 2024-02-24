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
exports.UserStatService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../user/schema/user.schema");
const schema_1 = require("../appointment/schema");
let UserStatService = class UserStatService {
    constructor(userModel, appointmentModel) {
        this.userModel = userModel;
        this.appointmentModel = appointmentModel;
    }
    async getTotalUsers() {
        return this.userModel.countDocuments({ user_type: 'user' });
    }
    async getUsersAddedLastMonth() {
        const lastMonthDate = new Date();
        lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
        lastMonthDate.setDate(1);
        lastMonthDate.setHours(0, 0, 0, 0);
        const nextMonthDate = new Date(lastMonthDate.getFullYear(), lastMonthDate.getMonth() + 1, 1);
        return this.userModel.countDocuments({
            createdAt: { $gte: lastMonthDate, $lt: nextMonthDate },
            user_type: 'user',
        });
    }
    async getActiveUsersCount() {
        return this.userModel.countDocuments({
            status: 'active',
            user_type: 'user',
        });
    }
    async getActiveUsersAddedLastMonth() {
        const lastMonthDate = new Date();
        lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
        lastMonthDate.setDate(1);
        lastMonthDate.setHours(0, 0, 0, 0);
        const nextMonthDate = new Date(lastMonthDate.getFullYear(), lastMonthDate.getMonth() + 1, 1);
        return this.userModel.countDocuments({
            createdAt: { $gte: lastMonthDate, $lt: nextMonthDate },
            status: 'active',
            user_type: 'user',
        });
    }
    async getUsersCreatedThisMonth() {
        const startOfMonth = new Date();
        startOfMonth.setDate(1);
        startOfMonth.setHours(0, 0, 0, 0);
        const nextMonthDate = new Date(startOfMonth.getFullYear(), startOfMonth.getMonth() + 1, 1);
        return this.userModel.countDocuments({
            createdAt: { $gte: startOfMonth, $lt: nextMonthDate },
            user_type: 'user',
        });
    }
    async getUsersCreatedLastMonth() {
        const startOfLastMonth = new Date();
        startOfLastMonth.setMonth(startOfLastMonth.getMonth() - 1);
        startOfLastMonth.setDate(1);
        startOfLastMonth.setHours(0, 0, 0, 0);
        const endOfLastMonth = new Date(startOfLastMonth);
        endOfLastMonth.setMonth(endOfLastMonth.getMonth() + 1);
        endOfLastMonth.setDate(0);
        endOfLastMonth.setHours(23, 59, 59, 999);
        return this.userModel.countDocuments({
            createdAt: { $gte: startOfLastMonth, $lt: endOfLastMonth },
            user_type: 'user',
        });
    }
    async getUsersCountByCountryAndState() {
        return this.userModel.aggregate([
            {
                $match: {
                    deleted: false,
                    status: 'active',
                    user_type: 'user',
                },
            },
            {
                $group: {
                    _id: {
                        country: '$country',
                        state: '$state',
                    },
                    count: { $sum: 1 },
                },
            },
            {
                $sort: {
                    count: -1,
                },
            },
        ]);
    }
    async findAllUsersWithAppointments() {
        const usersWithAppointmentCounts = await this.userModel.aggregate([
            {
                $match: {
                    user_type: 'user',
                },
            },
            {
                $lookup: {
                    from: 'appointments',
                    localField: '_id',
                    foreignField: 'user',
                    as: 'appointments',
                },
            },
            {
                $lookup: {
                    from: 'questions',
                    localField: '_id',
                    foreignField: 'user',
                    as: 'questions',
                },
            },
            {
                $project: {
                    _id: 1,
                    email: 1,
                    first_name: 1,
                    last_name: 1,
                    phone_number: 1,
                    country: 1,
                    state: 1,
                    city: 1,
                    appointmentCount: { $size: '$appointments' },
                    question_count: { $size: '$questions' },
                },
            },
        ]);
        return usersWithAppointmentCounts;
    }
    async getTotalAmountSpentAndPercentageChange() {
        const currentDate = new Date();
        const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        const thisMonthTotal = await this.appointmentModel.aggregate([
            {
                $match: {
                    date: {
                        $gte: lastMonthDate,
                        $lt: nextMonthDate,
                    },
                },
            },
            {
                $group: {
                    _id: null,
                    total: { $sum: { $toDouble: '$total_amount' } },
                },
            },
        ]);
        const previousMonthTotal = await this.appointmentModel.aggregate([
            {
                $match: {
                    date: {
                        $gte: new Date(lastMonthDate.getFullYear(), lastMonthDate.getMonth() - 1, 1),
                        $lt: lastMonthDate,
                    },
                },
            },
            {
                $group: {
                    _id: null,
                    total: { $sum: { $toDouble: '$total_amount' } },
                },
            },
        ]);
        const thisMonth = thisMonthTotal.length > 0 ? thisMonthTotal[0].total : 0;
        const previousMonth = previousMonthTotal.length > 0 ? previousMonthTotal[0].total : 0;
        const percentageChange = previousMonth !== 0 ? ((thisMonth - previousMonth) / previousMonth) * 100 : 0;
        return { thisMonth, previousMonth, percentageChange };
    }
    async getLawyerSpecializationPercentages() {
        const lawyersWithSpecializations = await this.userModel.aggregate([
            {
                $match: {
                    user_type: 'lawyer',
                },
            },
            {
                $unwind: '$specialization',
            },
            {
                $group: {
                    _id: '$specialization',
                    count: { $sum: 1 },
                },
            },
        ]);
        const totalLawyers = await this.userModel.countDocuments({ user_type: 'lawyer' });
        const specializationPercentages = lawyersWithSpecializations.reduce((acc, group) => {
            const percentage = (group.count / totalLawyers) * 100;
            acc[group._id] = percentage;
            return acc;
        }, {});
        return specializationPercentages;
    }
};
UserStatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(schema_1.Appointment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], UserStatService);
exports.UserStatService = UserStatService;
//# sourceMappingURL=user-stats.service.js.map