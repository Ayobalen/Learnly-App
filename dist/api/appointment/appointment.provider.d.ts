import { appointmentDto, paymentStatusDto, updateAppointmentDto } from './dtos';
import { IResponse } from 'src/interfaces';
import { Helpers } from 'src/helpers/general.helpers';
import { UserService } from '../user/user.service';
import { AppointmentService } from './appointment.service';
import { Paystack } from 'src/services/providers/payment/paystack';
export declare class AppointmentProvider {
    private readonly appointmentService;
    private readonly paystack;
    private readonly userService;
    private readonly helper;
    constructor(appointmentService: AppointmentService, paystack: Paystack, userService: UserService, helper: Helpers);
    createAppointment(AppointmentDto: appointmentDto): Promise<IResponse>;
    getAppointment(appointment_id: string): Promise<IResponse>;
    getLawyerAppointments(query: any): Promise<IResponse>;
    getUserAppointments(query: any): Promise<IResponse>;
    getAllAppointments(query: any): Promise<IResponse>;
    updateAppointment(appointment_id: string, UpdateAppointmentDto: updateAppointmentDto): Promise<IResponse>;
    deleteAppointment(appointment_id: string): Promise<IResponse>;
    updateAppointmentStatus(reference: string, paymentStatus: paymentStatusDto): Promise<IResponse>;
    updateAppointmentLink(reference: string, meetinglink: string): Promise<IResponse>;
}
