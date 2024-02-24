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
exports.AppointmentProvider = void 0;
const common_1 = require("@nestjs/common");
const general_helpers_1 = require("../../helpers/general.helpers");
const lodash_1 = require("lodash");
const constants_1 = require("../../constants");
const user_service_1 = require("../user/user.service");
const appointment_service_1 = require("./appointment.service");
const paystack_1 = require("../../services/providers/payment/paystack");
const zegoServerAssistant_1 = require("../../services/zegoServerAssistant");
const PushNotification_1 = require("../../services/providers/PushNotification");
const schedule = require('node-schedule');
let AppointmentProvider = class AppointmentProvider {
    constructor(appointmentService, paystack, userService, helper) {
        this.appointmentService = appointmentService;
        this.paystack = paystack;
        this.userService = userService;
        this.helper = helper;
    }
    async createAppointment(AppointmentDto) {
        const user = await this.userService.getUser({ _id: AppointmentDto.lawyer });
        if ((0, lodash_1.isEmpty)(user))
            throw new common_1.NotFoundException('Invalid lawyer ID');
        const userDetails = await this.userService.getUser({ _id: AppointmentDto.user });
        const email = userDetails.email;
        const totalConsultationFee = Number(AppointmentDto.consultation_fee.amount) *
            Math.round((await this.helper.convertHoursToMinutes(Number(AppointmentDto.consultation_fee.time))) /
                30);
        const legumeFee = totalConsultationFee * 0.1;
        const legume_fee_rate = '10%';
        const legume_tax_rate = '7.5%';
        const legumTax = totalConsultationFee * 0.075;
        const totalAmount = await this.appointmentService.totalCalculation(totalConsultationFee, legumeFee);
        const lawyerFee = totalConsultationFee - legumTax;
        AppointmentDto.legume_fee = AppointmentDto.legume_fee || {};
        AppointmentDto.tax = AppointmentDto.tax || {};
        AppointmentDto.legume_fee.rate = legume_fee_rate;
        AppointmentDto.legume_fee.amount = legumeFee.toString();
        AppointmentDto.tax.rate = legume_tax_rate;
        AppointmentDto.tax.amount = legumTax.toString();
        AppointmentDto.consultation_fee.amount = totalConsultationFee.toString();
        AppointmentDto.total_amount = totalAmount.toString();
        AppointmentDto.lawyer_fee = lawyerFee.toString();
        AppointmentDto.reference = await this.helper.randomStringGen(10);
        AppointmentDto.transaction_status = constants_1.TRANSACTION_STATUS.PENDING;
        AppointmentDto.status = constants_1.APPOINTMENT_STATUS.PENDING;
        const reference = AppointmentDto.reference;
        const totalAmountInKobo = totalAmount * 100;
        const payment_link = await this.paystack.genPaymentLink({
            total_amount: totalAmountInKobo.toString(),
            email,
        });
        const appointment = await this.appointmentService.createAppointment(AppointmentDto);
        const fcmToken = appointment.data.user.fcm_token;
        const appointmentStart = appointment.data.start_time;
        const appointmentEnd = appointment.data.end_time;
        const reminderBeforeStart = new Date(appointmentStart.getTime() - 5 * 60000);
        const reminderBeforeEnd = new Date(appointmentEnd.getTime() - 5 * 60000);
        schedule.scheduleJob(reminderBeforeStart, async () => {
            const title = 'Appointment Reminder';
            const body = `Your appointment with ${appointment.data.lawyer.first_name} is starting in 5 minutes.`;
            const response = await (0, PushNotification_1.sendNotification)(fcmToken, title, body);
            console.log('Notification sent: ', response);
        });
        schedule.scheduleJob(reminderBeforeEnd, async () => {
            const title = 'Appointment Ending Soon';
            const body = `Your appointment with ${appointment.data.lawyer.first_name} is ending in 5 minutes.`;
            const response = await (0, PushNotification_1.sendNotification)(fcmToken, title, body);
            console.log('Notification sent: ', response);
        });
        const appID = 179600701;
        const serverSecret = '948a8bce749372b5db191740d92296d1';
        const userId = AppointmentDto.user;
        const effectiveTimeInSeconds = 3600;
        const payloadObject = {
            room_id: appointment.data._id,
            privilege: {
                1: 1,
                2: 1,
            },
            stream_id_list: null,
        };
        const payload = JSON.stringify(payloadObject);
        const token = (0, zegoServerAssistant_1.generateToken04)(appID, userId, serverSecret, effectiveTimeInSeconds, payload);
        AppointmentDto.token = token;
        appointment.data.token = AppointmentDto.token;
        appointment.data.Channel = AppointmentDto.Channel;
        await appointment.data.save();
        return {
            status: 'success',
            message: 'Appointment booked successfully',
            data: Object.assign(Object.assign({}, appointment), { payment_link,
                reference,
                token }),
        };
    }
    async getAppointment(appointment_id) {
        const data = await this.appointmentService.getAppointment({ _id: appointment_id });
        if ((0, lodash_1.isEmpty)(data))
            throw new common_1.NotFoundException('Appointment not found');
        return {
            status: 'success',
            message: 'Appointment retrieved successfully',
            data,
        };
    }
    async getLawyerAppointments(query) {
        const _query = Object.assign({}, query);
        const paginationQuery = {};
        if (_query.page) {
            paginationQuery.page = Number(_query.page);
            delete _query.page;
        }
        if (_query.limit) {
            paginationQuery.limit = Number(_query.limit);
            delete _query.limit;
        }
        if (_query.start_date && _query.end_date) {
            _query.createdAt = {
                $gte: new Date(_query.start_date),
                $lt: new Date(_query.end_date),
            };
            delete _query.start_date;
            delete _query.end_date;
        }
        const lawyerId = _query.lawyer;
        delete _query.lawyer;
        const { data, count, totalPages } = await this.appointmentService.getAllLawyerAppointments(lawyerId, Object.assign(Object.assign({}, _query), paginationQuery));
        return {
            status: 'success',
            message: 'All appointments for the lawyer successfully retrieved',
            data,
            meta: {
                count,
                totalPages,
            },
        };
    }
    async getUserAppointments(query) {
        const _query = Object.assign({}, query);
        const paginationQuery = {};
        if (_query.page) {
            paginationQuery.page = Number(_query.page);
            delete _query.page;
        }
        if (_query.limit) {
            paginationQuery.limit = Number(_query.limit);
            delete _query.limit;
        }
        if (_query.start_date && _query.end_date) {
            _query.createdAt = {
                $gte: new Date(_query.start_date),
                $lt: new Date(_query.end_date),
            };
            delete _query.start_date;
            delete _query.end_date;
        }
        const userId = _query.user;
        delete _query.user;
        const { data, count, totalPages } = await this.appointmentService.getAllUserAppointments(userId, Object.assign(Object.assign({}, _query), paginationQuery));
        return {
            status: 'success',
            message: 'All appointments for the user successfully retrieved',
            data,
            meta: {
                count,
                totalPages,
            },
        };
    }
    async getAllAppointments(query) {
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
        if (_query.start_date && _query.end_date) {
            _query = {
                createdAt: { $gte: new Date(_query.start_date), $lt: new Date(_query.end_date) },
            };
        }
        const { count, totalPages, data } = await this.appointmentService.getAllAppointments(_query, paginationQuery);
        return {
            status: 'success',
            message: 'Appointments successfully retrieved',
            data: data,
            meta: {
                count,
                totalPages,
            },
        };
    }
    async updateAppointment(appointment_id, UpdateAppointmentDto) {
        const appointmentExist = await this.appointmentService.getAppointment({ _id: appointment_id });
        if ((0, lodash_1.isEmpty)(appointmentExist)) {
            throw new common_1.NotFoundException('Appointment not found');
        }
        const totalConsultationFee = Number(UpdateAppointmentDto.consultation_fee.amount) *
            Math.round((await this.helper.convertHoursToMinutes(Number(UpdateAppointmentDto.consultation_fee.time))) / 30);
        const legumeFee = totalConsultationFee * 0.1;
        const legume_fee_rate = '10%';
        const legume_tax_rate = '7.5%';
        const legumTax = totalConsultationFee * 0.075;
        const totalAmount = await this.appointmentService.totalCalculation(totalConsultationFee, legumeFee);
        const lawyerFee = totalConsultationFee - legumTax;
        UpdateAppointmentDto.legume_fee = UpdateAppointmentDto.legume_fee || { rate: '', amount: '' };
        UpdateAppointmentDto.tax = UpdateAppointmentDto.tax || { rate: '', amount: '' };
        UpdateAppointmentDto.legume_fee.rate = legume_fee_rate;
        UpdateAppointmentDto.legume_fee.amount = legumeFee.toString();
        UpdateAppointmentDto.tax.rate = legume_tax_rate;
        UpdateAppointmentDto.tax.amount = legumTax.toString();
        UpdateAppointmentDto.consultation_fee.amount = totalConsultationFee.toString();
        UpdateAppointmentDto.total_amount = totalAmount.toString();
        UpdateAppointmentDto.lawyer_fee = lawyerFee.toString();
        const updatedData = await this.appointmentService.updateAppointment({ _id: appointment_id }, UpdateAppointmentDto, { new: true });
        return {
            status: 'success',
            message: 'Appointment updated successfully',
            data: Object.assign(Object.assign({}, updatedData), { tax: legumTax.toString(), legume_fee: legumeFee.toString(), legume_fee_rate,
                legume_tax_rate }),
        };
    }
    async deleteAppointment(appointment_id) {
        const appointmentExist = await this.appointmentService.getAppointment({ _id: appointment_id });
        if ((0, lodash_1.isEmpty)(appointmentExist)) {
            throw new common_1.NotFoundException(`Appointment not found`);
        }
        await this.appointmentService.deleteAppointment({ _id: appointment_id });
        return {
            status: 'success',
            message: 'Appointment cancelled successfully',
            data: [],
        };
    }
    async updateAppointmentStatus(reference, paymentStatus) {
        const updatedData = await this.appointmentService.updateAppointmentData(reference, paymentStatus, { new: true });
        return {
            status: 'success',
            message: 'Transaction status updated successfully',
            data: updatedData,
        };
    }
    async updateAppointmentLink(reference, meetinglink) {
        const updatedData = await this.appointmentService.updateAppointmentData(reference, { meeting_link: meetinglink }, { new: true });
        return {
            status: 'success',
            message: 'Meeting link updated successfully',
            data: updatedData,
        };
    }
};
AppointmentProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [appointment_service_1.AppointmentService,
        paystack_1.Paystack,
        user_service_1.UserService,
        general_helpers_1.Helpers])
], AppointmentProvider);
exports.AppointmentProvider = AppointmentProvider;
//# sourceMappingURL=appointment.provider.js.map