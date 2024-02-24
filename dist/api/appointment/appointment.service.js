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
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const helpers_1 = require("../../helpers");
const lodash_1 = require("lodash");
const appointment_schema_1 = require("./schema/appointment.schema");
const availability_schema_1 = require("../availability/schema/availability.schema");
let AppointmentService = class AppointmentService {
    constructor(appointmentModel, availabilityModel, utilService) {
        this.appointmentModel = appointmentModel;
        this.availabilityModel = availabilityModel;
        this.utilService = utilService;
    }
    async createAppointment(createAppointmentDto) {
        const data = await this.appointmentModel.create(createAppointmentDto);
        const availability = await this.availabilityModel.findOne({
            lawyer: createAppointmentDto.lawyer,
        });
        await data.populate('lawyer user');
        await data.save();
        return { data, availability };
    }
    async getAppointment(filterQuery) {
        const data = await this.appointmentModel
            .findOne(filterQuery)
            .populate('user')
            .populate('lawyer');
        return data;
    }
    async getAllAppointments(filterQuery, paginationQuery) {
        const count = await this.appointmentModel.countDocuments(filterQuery);
        const { limit, offset, totalPages } = this.utilService.getPaginationData(paginationQuery, count);
        const data = (0, lodash_1.isEmpty)(paginationQuery)
            ? await this.appointmentModel
                .find(filterQuery)
                .populate('user')
                .populate('lawyer')
                .sort({ createdAt: -1 })
            : await this.appointmentModel
                .find(filterQuery)
                .populate('user')
                .populate('lawyer')
                .skip(offset)
                .sort({ createdAt: -1 });
        return {
            data,
            count,
            totalPages,
        };
    }
    async getAllLawyerAppointments(lawyerId, paginationQuery) {
        const filterQuery = { lawyer: lawyerId };
        const count = await this.appointmentModel.countDocuments(filterQuery);
        const { limit, offset, totalPages } = this.utilService.getPaginationData(paginationQuery, count);
        const data = (0, lodash_1.isEmpty)(paginationQuery)
            ? await this.appointmentModel
                .find(filterQuery)
                .populate('user')
                .populate('lawyer')
                .sort({ createdAt: -1 })
            : await this.appointmentModel
                .find(filterQuery)
                .populate('user')
                .populate('lawyer')
                .skip(offset)
                .sort({ createdAt: -1 });
        return {
            data,
            count,
            totalPages,
        };
    }
    async getAllUserAppointments(userId, paginationQuery) {
        const filterQuery = { user: userId };
        const count = await this.appointmentModel.countDocuments(filterQuery);
        const { limit, offset, totalPages } = this.utilService.getPaginationData(paginationQuery, count);
        const data = (0, lodash_1.isEmpty)(paginationQuery)
            ? await this.appointmentModel
                .find(filterQuery)
                .populate('user')
                .populate('lawyer')
                .sort({ createdAt: -1 })
            : await this.appointmentModel
                .find(filterQuery)
                .populate('user')
                .populate('lawyer')
                .skip(offset)
                .sort({ createdAt: -1 });
        return {
            data,
            count,
            totalPages,
        };
    }
    async updateAppointment(filterQuery, updateQuery, options) {
        const request = await this.appointmentModel.findOneAndUpdate(filterQuery, updateQuery, options);
        await request.populate('lawyer user');
        return request;
    }
    async updateAppointmentData(reference, updateQuery, options) {
        const filterQuery = { reference };
        const request = await this.appointmentModel.findOneAndUpdate(filterQuery, updateQuery, options);
        await request.populate('lawyer user');
        return request;
    }
    async getAppointmentByReference(reference) {
        const filterQuery = { reference };
        const request = await this.appointmentModel.findOne(filterQuery);
        await request.populate('lawyer user');
        return request;
    }
    async deleteAppointment(filterQuery) {
        const response = await this.appointmentModel.findOneAndDelete(filterQuery);
        return response;
    }
    async totalCalculation(consultation_Fee, legume_Fee) {
        const totalAmount = consultation_Fee + legume_Fee;
        return totalAmount;
    }
};
AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(appointment_schema_1.Appointment.name)),
    __param(1, (0, mongoose_1.InjectModel)(availability_schema_1.Availability.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        helpers_1.UtilService])
], AppointmentService);
exports.AppointmentService = AppointmentService;
//# sourceMappingURL=appointment.service.js.map