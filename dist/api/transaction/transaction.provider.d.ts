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
