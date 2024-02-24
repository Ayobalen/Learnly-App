import mongoose, { Document } from 'mongoose';
import { User } from 'src/api/user/schema/user.schema';
import { TRANSACTION_STATUS, TRANSACTION_TYPE } from 'src/constants';
export declare class Transaction {
    user: User;
    balance: number;
    transfer_to: User;
    transaction_type: TRANSACTION_TYPE;
    transaction_status: TRANSACTION_STATUS;
    amount: number;
}
export type TransactionDocument = Document & Transaction;
export declare const TransactionSchema: mongoose.Schema<Transaction, mongoose.Model<Transaction, any, any, any, mongoose.Document<unknown, any, Transaction> & Transaction & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Transaction, mongoose.Document<unknown, {}, mongoose.FlatRecord<Transaction>> & mongoose.FlatRecord<Transaction> & {
    _id: mongoose.Types.ObjectId;
}>;
