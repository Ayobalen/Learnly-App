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
import { User } from './user.schema';
export declare class Bank {
    user: User;
    account_number: string;
    account_name: string;
    bank_name: string;
    bank_code: string;
}
export type BankDocument = Document & Bank;
export declare const BankSchema: MongooseSchema<Bank, import("mongoose").Model<Bank, any, any, any, Document<unknown, any, Bank> & Bank & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Bank, Document<unknown, {}, import("mongoose").FlatRecord<Bank>> & import("mongoose").FlatRecord<Bank> & {
    _id: import("mongoose").Types.ObjectId;
}>;
