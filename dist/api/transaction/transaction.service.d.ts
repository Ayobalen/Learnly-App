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
import { Transaction, TransactionDocument } from './schema/transaction.schema';
import { FilterQuery, Model } from 'mongoose';
import { TransferDto } from './dtos';
export declare class TransactionService {
    private readonly transactionModel;
    constructor(transactionModel: Model<TransactionDocument>);
    findOrCreateTransactionByUserId(userId: string, amount: number): Promise<TransactionDocument>;
    withdraw(userId: string, amount: number): Promise<TransactionDocument>;
    transfer(transferDto: TransferDto): Promise<any>;
    getUserTransaction(filterQuery: FilterQuery<TransactionDocument>): Promise<(import("mongoose").Document<unknown, {}, TransactionDocument> & import("mongoose").Document<any, any, any> & Transaction & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
