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
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/api/user/schema/user.schema';
import { APPOINTMENT_STATUS, TRANSACTION_STATUS } from 'src/constants';
export declare class Appointment {
    user: User;
    lawyer: User;
    description: string;
    payment_provider: string;
    meting_ref: string;
    location: string;
    agora_token: string;
    agora_chanel: string;
    status: APPOINTMENT_STATUS.PENDING;
    date: Date;
    start_time: Date;
    end_time: Date;
    consultation_fee: any;
    legume_fee: any;
    tax: any;
    total_amount: string;
    lawyer_fee: string;
    reference: string;
    transaction_status: TRANSACTION_STATUS;
    Channel: string;
    token: string;
}
export type AppointmentDocument = Appointment & Document;
export declare const AppointmentSchema: MongooseSchema<Appointment, import("mongoose").Model<Appointment, any, any, any, Document<unknown, any, Appointment> & Appointment & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Appointment, Document<unknown, {}, import("mongoose").FlatRecord<Appointment>> & import("mongoose").FlatRecord<Appointment> & {
    _id: import("mongoose").Types.ObjectId;
}>;
