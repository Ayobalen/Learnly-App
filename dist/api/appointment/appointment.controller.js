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
exports.AppointmentController = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../helpers");
const dtos_1 = require("./dtos");
const appointment_provider_1 = require("./appointment.provider");
const schema_validators_1 = require("./schema-validators");
let AppointmentController = class AppointmentController {
    constructor(appointmentProvider) {
        this.appointmentProvider = appointmentProvider;
    }
    async getLawyerAppointments(lawyerId) {
        const response = await this.appointmentProvider.getLawyerAppointments({ lawyer: lawyerId });
        return response;
    }
    async getAllAppointments(query) {
        const data = await this.appointmentProvider.getAllAppointments(query);
        return data;
    }
    async updateCms(payload, appointment_id) {
        return this.appointmentProvider.updateAppointment(appointment_id, payload);
    }
    async createAppointment(userAuth, AppointmentDto) {
        AppointmentDto.user = userAuth.user;
        return this.appointmentProvider.createAppointment(AppointmentDto);
    }
    async getAppointment(appointment_id) {
        return await this.appointmentProvider.getAppointment(appointment_id);
    }
    async deleteCms(appointment_id) {
        return this.appointmentProvider.deleteAppointment(appointment_id);
    }
    async getUserAppointments(userId) {
        const response = await this.appointmentProvider.getUserAppointments({ user: userId });
        return response;
    }
};
__decorate([
    (0, common_1.Get)('lawyers/:lawyer_id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Param)('lawyer_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getLawyerAppointments", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getAllAppointments", null);
__decorate([
    (0, common_1.Put)(':appointment_id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.UpdateAppointmentSchema))),
    __param(1, (0, common_1.Param)('appointment_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.updateAppointmentDto, String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "updateCms", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, helpers_1.UserAuth)()),
    __param(1, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.AppointmentSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.appointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "createAppointment", null);
__decorate([
    (0, common_1.Get)(':appointment_id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Param)('appointment_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getAppointment", null);
__decorate([
    (0, common_1.Delete)(':appointment_id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Param)('appointment_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "deleteCms", null);
__decorate([
    (0, common_1.Get)('users/:user_id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Param)('user_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getUserAppointments", null);
AppointmentController = __decorate([
    (0, common_1.Controller)('appointments'),
    __metadata("design:paramtypes", [appointment_provider_1.AppointmentProvider])
], AppointmentController);
exports.AppointmentController = AppointmentController;
//# sourceMappingURL=appointment.controller.js.map