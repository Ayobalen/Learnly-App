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
