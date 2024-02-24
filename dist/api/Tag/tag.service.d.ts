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
import { FilterQuery, Model, QueryOptions, UpdateQuery } from 'mongoose';
import { PaginationQuery } from 'src/interfaces';
import { UtilService } from 'src/helpers';
import { Tags, TagsDocument } from './schema';
import { TagsDto } from './dtos';
export declare class TagsService {
    private readonly tagModel;
    private readonly utilService;
    constructor(tagModel: Model<Tags>, utilService: UtilService);
    createTag(data: TagsDto): Promise<import("mongoose").Document<unknown, {}, Tags> & Tags & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getTag(filterQuery: FilterQuery<TagsDocument>): Promise<import("mongoose").Document<unknown, {}, Tags> & Tags & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getTags(filterQuery: FilterQuery<TagsDocument>, paginationQuery?: PaginationQuery): Promise<{
        data: (import("mongoose").Document<unknown, {}, Tags> & Tags & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        totalPages: number;
        count: number;
    }>;
    updateTag(filterQuery: FilterQuery<TagsDocument>, updateQuery: UpdateQuery<TagsDocument>, options?: QueryOptions): Promise<import("mongoose").Document<unknown, {}, Tags> & Tags & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteTag(filterQuery: FilterQuery<TagsDocument>): Promise<import("mongoose").Document<unknown, {}, Tags> & Tags & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
