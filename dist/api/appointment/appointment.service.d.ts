/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { FilterQuery, Model, QueryOptions, UpdateQuery } from 'mongoose';
import { UtilService } from 'src/helpers';
import { PaginationQuery } from 'src/interfaces';
import { Appointment, AppointmentDocument } from './schema/appointment.schema';
import { appointmentDto } from './dtos';
import { Availability, AvailabilityDocument } from '../availability/schema/availability.schema';
export declare class AppointmentService {
    private readonly appointmentModel;
    private readonly availabilityModel;
    private readonly utilService;
    constructor(appointmentModel: Model<AppointmentDocument>, availabilityModel: Model<AvailabilityDocument>, utilService: UtilService);
    createAppointment(createAppointmentDto: appointmentDto): Promise<{
        data: import("mongoose").Document<unknown, {}, AppointmentDocument> & Appointment & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
        availability: import("mongoose").Document<unknown, {}, AvailabilityDocument> & Availability & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    getAppointment(filterQuery: FilterQuery<AppointmentDocument>): Promise<import("mongoose").Document<unknown, {}, AppointmentDocument> & Appointment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllAppointments(filterQuery: FilterQuery<AppointmentDocument>, paginationQuery?: PaginationQuery): Promise<{
        data: Omit<Omit<import("mongoose").Document<unknown, {}, AppointmentDocument> & Appointment & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>, never>[];
        count: number;
        totalPages: number;
    }>;
    getAllLawyerAppointments(lawyerId: string, paginationQuery?: PaginationQuery): Promise<{
        data: Omit<Omit<import("mongoose").Document<unknown, {}, AppointmentDocument> & Appointment & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>, never>[];
        count: number;
        totalPages: number;
    }>;
    getAllUserAppointments(userId: string, paginationQuery?: PaginationQuery): Promise<{
        data: Omit<Omit<import("mongoose").Document<unknown, {}, AppointmentDocument> & Appointment & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>, never>[];
        count: number;
        totalPages: number;
    }>;
    updateAppointment(filterQuery: FilterQuery<AppointmentDocument>, updateQuery: UpdateQuery<AppointmentDocument>, options?: QueryOptions): Promise<import("mongoose").Document<unknown, {}, AppointmentDocument> & Appointment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateAppointmentData(reference: string, updateQuery: UpdateQuery<AppointmentDocument>, options?: QueryOptions): Promise<import("mongoose").Document<unknown, {}, AppointmentDocument> & Appointment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAppointmentByReference(reference: string): Promise<import("mongoose").Document<unknown, {}, AppointmentDocument> & Appointment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteAppointment(filterQuery: FilterQuery<AppointmentDocument>): Promise<import("mongoose").Document<unknown, {}, AppointmentDocument> & Appointment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    totalCalculation(consultation_Fee: number, legume_Fee: number): Promise<number>;
}
