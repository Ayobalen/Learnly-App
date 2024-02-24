import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction, TransactionDocument } from './schema/transaction.schema';
import { FilterQuery, Model } from 'mongoose';
import { TRANSACTION_STATUS, TRANSACTION_TYPE } from 'src/constants';
import { TransferDto } from './dtos';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly transactionModel: Model<TransactionDocument>,
  ) {}
  async findOrCreateTransactionByUserId(
    userId: string,
    amount: number,
  ): Promise<TransactionDocument> {
    const latestTransaction = await this.transactionModel
      .findOne({ user: userId })
      .sort({ createdAt: -1 });
    const newBalance = latestTransaction ? latestTransaction.balance + amount : amount;
    const newTransaction = new this.transactionModel({
      user: userId,
      balance: newBalance,
      transaction_type: TRANSACTION_TYPE.DEPOSIT,
      transaction_status: TRANSACTION_STATUS.COMPLETED,
    });
    await newTransaction.save();

    return newTransaction;
  }

  async withdraw(userId: string, amount: number): Promise<TransactionDocument> {
    const userTransaction = await this.transactionModel.findOne({ user: userId });
    if (!userTransaction) {
      throw new NotFoundException('Transaction not found for the user');
    }
    if (userTransaction.balance < amount) {
      throw new BadRequestException('Insufficient balance for withdrawal');
    }
    const withdrawalTransaction = new this.transactionModel({
      user: userId,
      balance: -amount,
      transaction_type: TRANSACTION_TYPE.WITHDRAWAL,
      transaction_status: TRANSACTION_STATUS.COMPLETED,
    });

    await withdrawalTransaction.save();
    userTransaction.balance -= amount;
    await userTransaction.save();
    return withdrawalTransaction;
  }

  async transfer(transferDto: TransferDto): Promise<any> {
    const senderTransaction = await this.transactionModel.findOne({ user: transferDto.user });
    if (!senderTransaction) {
      throw new NotFoundException('Transaction not found for the sender');
    }
    if (senderTransaction.balance < transferDto.amount) {
      throw new BadRequestException('Insufficient balance for transfer');
    }
    let recipientTransaction = await this.transactionModel.findOne({
      user: transferDto.transfer_to,
    });
    if (!recipientTransaction) {
      recipientTransaction = new this.transactionModel({
        user: transferDto.transfer_to,
        balance: 0,
        transaction_type: TRANSACTION_TYPE.INITIAL,
        transaction_status: TRANSACTION_STATUS.COMPLETED,
      });
      await recipientTransaction.save();
    }
    const transferTransaction = new this.transactionModel({
      user: transferDto.user,
      balance: -transferDto.amount,
      transaction_type: TRANSACTION_TYPE.TRANSFER,
      transaction_status: TRANSACTION_STATUS.COMPLETED,
      transfer_to: transferDto.transfer_to,
    });

    await transferTransaction.save();
    senderTransaction.balance -= transferDto.amount;
    await senderTransaction.save();
    recipientTransaction.balance += transferDto.amount;
    await recipientTransaction.save();

    return {
      message: 'Money transferred successfully',
      data: {
        transaction: transferTransaction,
        senderUpdatedBalance: senderTransaction.balance,
        recipientUpdatedBalance: recipientTransaction.balance,
      },
    };
  }

  async getUserTransaction(filterQuery: FilterQuery<TransactionDocument>) {
    const allTransaction = await this.transactionModel.find(filterQuery);
    return allTransaction;
  }
}
