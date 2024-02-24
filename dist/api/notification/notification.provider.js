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
exports.NotificationProvider = void 0;
const common_1 = require("@nestjs/common");
const notification_service_1 = require("./notification.service");
let NotificationProvider = class NotificationProvider {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    async createNotification(notificationDto) {
        await this.notificationService.createNotification(notificationDto);
        return {
            status: 'success',
            message: 'Notification created successfully',
            data: {},
        };
    }
    async updateNotification(updateDto, notificationId) {
        const notification = await this.notificationService.updateNotification({
            _id: notificationId,
        }, updateDto, { new: true });
        return {
            status: 'success',
            message: 'Notification updated successfully',
            data: notification,
        };
    }
    async getNotifications(userId, queryDto) {
        const query = {};
        if ((queryDto === null || queryDto === void 0 ? void 0 : queryDto.is_read) === 'true') {
            query['is_read'] = true;
        }
        else if ((queryDto === null || queryDto === void 0 ? void 0 : queryDto.is_read) === 'false') {
            query['is_read'] = false;
        }
        if ((queryDto === null || queryDto === void 0 ? void 0 : queryDto.is_for_admin) === 'true') {
            query['user'] = {
                $exists: false,
            };
        }
        else {
            query['user'] = userId;
        }
        const notifications = await this.notificationService.getNotifications(query);
        return {
            status: 'success',
            message: 'Notifications successfully retrieved',
            data: notifications,
        };
    }
    async getNotification(userId, notifiationId) {
        const notification = await this.notificationService.getNotification({
            user: userId,
            _id: notifiationId,
        });
        if (!notification) {
            throw new common_1.NotFoundException('Notification not found');
        }
        return {
            status: 'success',
            message: 'Notification successfully retrieved',
            data: notification,
        };
    }
    async deleteNotification(userId, notifiationId) {
        const notification = await this.notificationService.deleteNotification({
            user: userId,
            _id: notifiationId,
        });
        if (!notification) {
            throw new common_1.NotFoundException('Notification not found');
        }
        return {
            status: 'success',
            message: 'Notification successfully deleted',
        };
    }
    async deleteNotifications(userId) {
        const res = await this.notificationService.deleteManyNotifications({
            user: userId,
        });
        if (!res.acknowledged) {
            throw new common_1.InternalServerErrorException('Error deleting user notifications');
        }
        return {
            status: 'success',
            message: 'User notifications successfully deleted',
        };
    }
};
NotificationProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationProvider);
exports.NotificationProvider = NotificationProvider;
//# sourceMappingURL=notification.provider.js.map