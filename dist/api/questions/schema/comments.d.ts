import mongoose, { Document } from 'mongoose';
import { Questions } from './questions.schema';
export declare class Comment {
    question: Questions;
    body: string;
    user: mongoose.Schema.Types.ObjectId;
    likes: number;
    dislikes: number;
}
export type CommentDocument = Comment & Document;
export declare const CommentSchema: mongoose.Schema<Comment, mongoose.Model<Comment, any, any, any, mongoose.Document<unknown, any, Comment> & Comment & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Comment, mongoose.Document<unknown, {}, mongoose.FlatRecord<Comment>> & mongoose.FlatRecord<Comment> & {
    _id: mongoose.Types.ObjectId;
}>;
