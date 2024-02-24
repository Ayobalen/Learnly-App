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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("./schema");
let NotificationService = class NotificationService {
    constructor(notificationModel) {
        this.notificationModel = notificationModel;
    }
    async createNotification(createNotificationDto) {
        const data = await this.notificationModel.create(createNotificationDto);
        await data.populate('user');
        return data;
    }
    async getNotification(filterQuery) {
        const notification = await this.notificationModel.findOne(filterQuery);
        return notification.populate('user');
    }
    async getNotifications(filterQuery) {
        const notifications = await this.notificationModel
            .find(filterQuery)
            .sort('-createdAt')
            .populate('user')
            .lean();
        return notifications.map((item) => (Object.assign(Object.assign({}, item), { body: item.body.replace(/<\/?[^>]+>/gi, '') })));
    }
    async updateNotification(filterQuery, updateQuery, options) {
        const notification = await this.notificationModel.findOneAndUpdate(filterQuery, updateQuery, options);
        return notification.populate('user');
    }
    async deleteNotification(filterQuery) {
        const notification = await this.notificationModel.findOneAndDelete(filterQuery);
        return notification;
    }
    async deleteManyNotifications(filterQuery) {
        const res = await this.notificationModel.deleteMany(filterQuery);
        return res;
    }
};
NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.NotificationModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map