/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/api/user/schema/user.schema';
export declare class UserToken {
    user: User;
    access_token: string;
    refresh_token: string;
}
export type UserTokenDocument = Document & UserToken;
export declare const UserTokenSchema: MongooseSchema<UserToken, import("mongoose").Model<UserToken, any, any, any, Document<unknown, any, UserToken> & UserToken & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserToken, Document<unknown, {}, import("mongoose").FlatRecord<UserToken>> & import("mongoose").FlatRecord<UserToken> & {
    _id: import("mongoose").Types.ObjectId;
}>;
