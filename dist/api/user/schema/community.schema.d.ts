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
export declare class Community {
    email: string;
    first_name: string;
    last_name: string;
    country: string;
    state: string;
    university: string;
    name_of_club: string;
    no_of_members: string;
    suggestion: string;
}
export type CommunityDocument = Document & Community;
export declare const CommunitySchema: MongooseSchema<Community, import("mongoose").Model<Community, any, any, any, Document<unknown, any, Community> & Community & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Community, Document<unknown, {}, import("mongoose").FlatRecord<Community>> & import("mongoose").FlatRecord<Community> & {
    _id: import("mongoose").Types.ObjectId;
}>;
