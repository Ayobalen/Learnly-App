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
import { Model, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import { UtilService } from 'src/helpers/utils.service';
import { PaginationQuery } from 'src/interfaces';
import { User, UserDocument } from './schema';
export declare class UserService {
    private readonly userModel;
    private readonly utilService;
    constructor(userModel: Model<UserDocument>, utilService: UtilService);
    createNewUser(data: any): Promise<import("mongoose").Document<unknown, {}, UserDocument> & import("mongoose").Document<any, any, any> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllUsers(filterQuery: FilterQuery<UserDocument>, paginationQuery?: PaginationQuery): Promise<{
        data: (import("mongoose").Document<unknown, {}, UserDocument> & import("mongoose").Document<any, any, any> & User & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        count: number;
        totalPages: number;
    }>;
    getUser(filterQuery: FilterQuery<UserDocument>): Promise<import("mongoose").Document<unknown, {}, UserDocument> & import("mongoose").Document<any, any, any> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateUser(filterQuery: FilterQuery<UserDocument>, updateQuery: UpdateQuery<UserDocument>, options?: QueryOptions): Promise<import("mongoose").Document<unknown, {}, UserDocument> & import("mongoose").Document<any, any, any> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteUser(filterQuery: FilterQuery<UserDocument>): Promise<import("mongoose").Document<unknown, {}, UserDocument> & import("mongoose").Document<any, any, any> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
