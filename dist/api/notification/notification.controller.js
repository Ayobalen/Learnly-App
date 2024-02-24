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
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../helpers");
const dtos_1 = require("./dtos");
const notification_provider_1 = require("./notification.provider");
const schema_validators_1 = require("./schema-validators");
let NotificationController = class NotificationController {
    constructor(notificationProvider) {
        this.notificationProvider = notificationProvider;
    }
    async createNotification(userAuth, notificationDto) {
        notificationDto.user = userAuth.user;
        return this.notificationProvider.createNotification(notificationDto);
    }
    async updateNotification(updateDto, notificationId) {
        const data = await this.notificationProvider.updateNotification(updateDto, notificationId);
        return data;
    }
    async getNotifications(userId, queryDto) {
        const data = await this.notificationProvider.getNotifications(userId, queryDto);
        return data;
    }
    async getNotification(notifiationId, userId) {
        const data = await this.notificationProvider.getNotification(userId, notifiationId);
        return data;
    }
    async deleteNotification(notifiationId, userId) {
        const data = await this.notificationProvider.deleteNotification(userId, notifiationId);
        return data;
    }
    async deleteNotifications(userId) {
        const data = await this.notificationProvider.deleteNotifications(userId);
        return data;
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, helpers_1.UserAuth)()),
    __param(1, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.createNotification))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.CreateNotificationDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "createNotification", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.UpdateNotificationSchema))),
    __param(1, (0, common_1.Param)('id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.UpdateNotificationDto, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "updateNotification", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, helpers_1.UserAuth)('user')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getNotifications", null);
__decorate([
    (0, common_1.Get)(':notifiationId'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Param)('notifiationId', helpers_1.MongoIDPipe)),
    __param(1, (0, helpers_1.UserAuth)('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getNotification", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Param)('id', helpers_1.MongoIDPipe)),
    __param(1, (0, helpers_1.UserAuth)('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "deleteNotification", null);
__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, helpers_1.UserAuth)('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "deleteNotifications", null);
NotificationController = __decorate([
    (0, common_1.Controller)('notifications'),
    __metadata("design:paramtypes", [notification_provider_1.NotificationProvider])
], NotificationController);
exports.NotificationController = NotificationController;
//# sourceMappingURL=notification.controller.js.map