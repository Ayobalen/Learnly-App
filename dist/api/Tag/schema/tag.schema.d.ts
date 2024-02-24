import * as mongoose from 'mongoose';
export declare class Tags {
    name: string;
    description: string;
}
export type TagsDocument = mongoose.Document & Tags;
export declare const TagsSchema: mongoose.Schema<Tags, mongoose.Model<Tags, any, any, any, mongoose.Document<unknown, any, Tags> & Tags & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Tags, mongoose.Document<unknown, {}, mongoose.FlatRecord<Tags>> & mongoose.FlatRecord<Tags> & {
    _id: mongoose.Types.ObjectId;
}>;
