import mongoose, { Document } from 'mongoose';
export declare class NewsLetter {
    email: string;
}
export type NewsLetterDocument = Document & NewsLetter;
export declare const NewsLetterSchema: mongoose.Schema<NewsLetter, mongoose.Model<NewsLetter, any, any, any, mongoose.Document<unknown, any, NewsLetter> & NewsLetter & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, NewsLetter, mongoose.Document<unknown, {}, mongoose.FlatRecord<NewsLetter>> & mongoose.FlatRecord<NewsLetter> & {
    _id: mongoose.Types.ObjectId;
}>;
