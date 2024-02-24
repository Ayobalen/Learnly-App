import mongoose, { Document } from 'mongoose';
import { User } from 'src/api/user/schema/user.schema';
export declare class UserAuth {
    user: User;
    email: string;
    phone_number: string;
    password: string;
    previousPasswords: string[];
    deleted: boolean;
}
export type UserAuthDocument = UserAuth & Document;
export declare const UserAuthSchema: mongoose.Schema<UserAuth, mongoose.Model<UserAuth, any, any, any, mongoose.Document<unknown, any, UserAuth> & UserAuth & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, UserAuth, mongoose.Document<unknown, {}, mongoose.FlatRecord<UserAuth>> & mongoose.FlatRecord<UserAuth> & {
    _id: mongoose.Types.ObjectId;
}>;
