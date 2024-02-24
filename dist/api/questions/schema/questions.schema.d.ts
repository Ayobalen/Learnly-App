import mongoose, { Document } from 'mongoose';
export declare class Questions {
    body: string;
    location: string;
    specialization: string[];
    user: mongoose.Schema.Types.ObjectId;
    liked_users: any;
    disliked_users: any;
    likes: number;
    dislikes: number;
    commentCount: number;
    is_deleted: any;
    status: any;
    image_url: string[];
    tags: string[];
}
export type QuestionsDocument = Questions & Document;
export declare const QuestionsSchema: mongoose.Schema<Questions, mongoose.Model<Questions, any, any, any, mongoose.Document<unknown, any, Questions> & Questions & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Questions, mongoose.Document<unknown, {}, mongoose.FlatRecord<Questions>> & mongoose.FlatRecord<Questions> & {
    _id: mongoose.Types.ObjectId;
}>;
