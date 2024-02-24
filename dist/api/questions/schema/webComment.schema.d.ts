import mongoose, { Document } from 'mongoose';
export declare class webComment {
    comment: string;
}
export type webCommentDocument = webComment & Document;
export declare const webCommentSchema: mongoose.Schema<webComment, mongoose.Model<webComment, any, any, any, mongoose.Document<unknown, any, webComment> & webComment & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, webComment, mongoose.Document<unknown, {}, mongoose.FlatRecord<webComment>> & mongoose.FlatRecord<webComment> & {
    _id: mongoose.Types.ObjectId;
}>;
