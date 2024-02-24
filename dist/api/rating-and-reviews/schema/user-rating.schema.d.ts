import mongoose from 'mongoose';
import { Appointment } from 'src/api/appointment/schema';
import { User } from 'src/api/user/schema/user.schema';
export declare class UsersRating {
    user: User;
    appointment: Appointment;
    review: string;
    rating: number;
}
export type UsersRatingDocument = UsersRating & mongoose.Document;
export declare const UsersRatingSchema: mongoose.Schema<UsersRating, mongoose.Model<UsersRating, any, any, any, mongoose.Document<unknown, any, UsersRating> & UsersRating & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, UsersRating, mongoose.Document<unknown, {}, mongoose.FlatRecord<UsersRating>> & mongoose.FlatRecord<UsersRating> & {
    _id: mongoose.Types.ObjectId;
}>;
