import { Document, Schema as MongooseSchema } from 'mongoose';
import mongoose from 'mongoose';
import { USER_TYPES } from 'src/constants';
export declare class User {
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    account_number: number;
    country: string;
    state: string;
    city: string;
    user_type: USER_TYPES;
    deleted: boolean;
    status: any;
}
export type UserDocument = Document & User;
export declare const UserSchema: MongooseSchema<User, mongoose.Model<User, any, any, any, Document<unknown, any, User> & User & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, Document<unknown, {}, mongoose.FlatRecord<User>> & mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
}>;
