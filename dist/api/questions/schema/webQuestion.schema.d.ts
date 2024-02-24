import mongoose, { Document } from 'mongoose';
export declare class webQuestion {
    question: string;
}
export type webQuestionDocument = webQuestion & Document;
export declare const webQuestionSchema: mongoose.Schema<webQuestion, mongoose.Model<webQuestion, any, any, any, mongoose.Document<unknown, any, webQuestion> & webQuestion & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, webQuestion, mongoose.Document<unknown, {}, mongoose.FlatRecord<webQuestion>> & mongoose.FlatRecord<webQuestion> & {
    _id: mongoose.Types.ObjectId;
}>;
