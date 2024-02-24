import mongoose from 'mongoose';
import { Appointment } from 'src/api/appointment/schema';
import { User } from 'src/api/user/schema/user.schema';
export declare class LawyersRating {
    lawyer: User;
    appointment: Appointment;
    review: string;
    rating: number;
}
export type LawyersRatingDocument = LawyersRating & mongoose.Document;
export declare const LawyersRatingSchema: mongoose.Schema<LawyersRating, mongoose.Model<LawyersRating, any, any, any, mongoose.Document<unknown, any, LawyersRating> & LawyersRating & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, LawyersRating, mongoose.Document<unknown, {}, mongoose.FlatRecord<LawyersRating>> & mongoose.FlatRecord<LawyersRating> & {
    _id: mongoose.Types.ObjectId;
}>;
