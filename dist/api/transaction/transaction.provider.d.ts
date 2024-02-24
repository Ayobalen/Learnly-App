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
import { DepositDto, WithdrawalDto, TransferDto } from './dtos';
import { UserService } from '../user/user.service';
import { TransactionService } from './transaction.service';
import { IResponse } from 'src/interfaces';
import { Types } from 'mongoose';
export declare class TransactionProvider {
    private readonly transactionService;
    private readonly userService;
    constructor(transactionService: TransactionService, userService: UserService);
    depositMoney(depositDto: DepositDto): Promise<IResponse>;
    withdrawMoney(withdrawalDto: WithdrawalDto): Promise<IResponse>;
    transferMoney(transferDto: TransferDto): Promise<IResponse>;
    getUserTransactions(userId: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("./schema/transaction.schema").TransactionDocument> & import("mongoose").Document<any, any, any> & import("./schema/transaction.schema").Transaction & {
            _id: Types.ObjectId;
        })[];
        status: string;
        message: string;
    }>;
}
