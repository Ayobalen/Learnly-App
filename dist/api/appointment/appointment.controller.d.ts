import { appointmentDto, updateAppointmentDto } from './dtos';
import { IResponse } from 'src/interfaces';
import { AppointmentProvider } from './appointment.provider';
export declare class AppointmentController {
    private readonly appointmentProvider;
    constructor(appointmentProvider: AppointmentProvider);
    getLawyerAppointments(lawyerId: string): Promise<IResponse>;
    getAllAppointments(query: any): Promise<IResponse>;
    updateCms(payload: updateAppointmentDto, appointment_id: string): Promise<IResponse>;
    createAppointment(userAuth: any, AppointmentDto: appointmentDto): Promise<IResponse>;
    getAppointment(appointment_id: string): Promise<IResponse>;
    deleteCms(appointment_id: string): Promise<IResponse>;
    getUserAppointments(userId: string): Promise<IResponse>;
}
