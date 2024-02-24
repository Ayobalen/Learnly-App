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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { IResponse, IUserAuth } from 'src/interfaces';
import { DepositDto, WithdrawalDto, TransferDto } from './dtos';
import { TransactionProvider } from './transaction.provider';
export declare class TransactionController {
    private readonly transactionProvider;
    constructor(transactionProvider: TransactionProvider);
    deposit(userAuth: any, depositDto: DepositDto): Promise<IResponse>;
    withdraw(userAuth: any, wthdrawalDto: WithdrawalDto): Promise<IResponse>;
    transfer(userAuth: any, transferDto: TransferDto): Promise<IResponse>;
    getUserTransaction(userAuth: IUserAuth, req: any, user: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("./schema/transaction.schema").TransactionDocument> & import("mongoose").Document<any, any, any> & import("./schema/transaction.schema").Transaction & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        status: string;
        message: string;
    }>;
}
