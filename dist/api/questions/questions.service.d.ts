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
import { PaginationQuery } from 'src/interfaces';
import { FilterQuery, Model, QueryOptions, UpdateQuery } from 'mongoose';
import { Comment, CommentDocument, Questions, QuestionsDocument, webCommentDocument } from './schema';
import { QuestionsDto, ReplyDto, WebCommentDto, WebQuestionDto } from './dtos';
import { UtilService } from 'src/helpers';
import { webQuestionDocument } from './schema/webQuestion.schema';
export declare class QuestionService {
    private readonly questionsModel;
    private readonly commentModel;
    private readonly webQuestion;
    private readonly webComment;
    private readonly utilService;
    constructor(questionsModel: Model<QuestionsDocument>, commentModel: Model<CommentDocument>, webQuestion: Model<webQuestionDocument>, webComment: Model<webCommentDocument>, utilService: UtilService);
    getAllQuestion(filterQuery: FilterQuery<QuestionsDocument>, paginationQuery?: PaginationQuery): Promise<{
        data: Omit<import("mongoose").Document<unknown, {}, QuestionsDocument> & Questions & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
        count: number;
        totalPages: number;
    }>;
    createQuestion(questionsDto: QuestionsDto): Promise<import("mongoose").Document<unknown, {}, QuestionsDocument> & Questions & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllComments(questionId: string): Promise<{
        data: Omit<Omit<import("mongoose").Document<unknown, {}, CommentDocument> & Comment & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>, never>[];
    }>;
    getQuestion(filterQuery: FilterQuery<QuestionsDocument>): Promise<import("mongoose").Document<unknown, {}, QuestionsDocument> & Questions & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllLawyerReplies(lawyerId: string, paginationQuery?: PaginationQuery): Promise<{
        data: Omit<Omit<import("mongoose").Document<unknown, {}, CommentDocument> & Comment & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>, never>[];
        count: number;
        totalPages: number;
    }>;
    getAllUserQuestions(userId: string, paginationQuery?: PaginationQuery): Promise<{
        data: Omit<import("mongoose").Document<unknown, {}, QuestionsDocument> & Questions & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
        count: number;
        totalPages: number;
    }>;
    updateQuestion(filterQuery: FilterQuery<QuestionsDocument>, updateQuery: UpdateQuery<QuestionsDocument>, options?: QueryOptions): Promise<import("mongoose").Document<unknown, {}, QuestionsDocument> & Questions & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteQuestion(filterQuery: FilterQuery<QuestionsDocument>): Promise<import("mongoose").Document<unknown, {}, QuestionsDocument> & Questions & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    likeQuestion(filterQuery: FilterQuery<QuestionsDocument>): Promise<import("mongoose").Document<unknown, {}, QuestionsDocument> & Questions & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    dislikeQuestion(filterQuery: FilterQuery<QuestionsDocument>): Promise<import("mongoose").Document<unknown, {}, QuestionsDocument> & Questions & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createReply(replyDto: ReplyDto): Promise<import("mongoose").Document<unknown, {}, CommentDocument> & Comment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getComment(filterQuery: FilterQuery<CommentDocument>): Promise<import("mongoose").Document<unknown, {}, CommentDocument> & Comment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteComment(filterQuery: FilterQuery<CommentDocument>): Promise<import("mongoose").Document<unknown, {}, CommentDocument> & Comment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    likeComment(filterQuery: FilterQuery<CommentDocument>): Promise<import("mongoose").Document<unknown, {}, CommentDocument> & Comment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    dislikeComment(filterQuery: FilterQuery<CommentDocument>): Promise<import("mongoose").Document<unknown, {}, CommentDocument> & Comment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    ask(webQuestion: WebQuestionDto): Promise<void>;
    addComment(webComment: WebCommentDto): Promise<void>;
    searchQuestions(searchQuery: string): Promise<any[]>;
}
