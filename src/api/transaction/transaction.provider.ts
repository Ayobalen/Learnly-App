import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { DepositDto, WithdrawalDto, TransferDto } from './dtos';
import { UserService } from '../user/user.service';
import { TransactionService } from './transaction.service';
import { IResponse } from 'src/interfaces';
import { Types } from 'mongoose';

@Injectable()
export class TransactionProvider {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly userService: UserService,
  ) {}

  async depositMoney(depositDto: DepositDto): Promise<IResponse> {
    try {
      const user = await this.userService.getUser({ _id: depositDto.user });
      if (!user) {
        throw new NotFoundException('User does not exist');
      }

      const transaction = await this.transactionService.findOrCreateTransactionByUserId(
        user._id,
        depositDto.amount,
      );

      return {
        status: 'success',
        message: 'Money deposited successfully',
        data: transaction,
      };
    } catch (err) {
      console.log(err);
      return {
        status: 'error',
        message: 'An error occurred while depositing money',
        data: null,
      };
    }
  }

  async withdrawMoney(withdrawalDto: WithdrawalDto): Promise<IResponse> {
    try {
      const user = await this.userService.getUser({ _id: withdrawalDto.user });
      if (!user) {
        throw new NotFoundException('User does not exist');
      }
      const transaction = await this.transactionService.withdraw(user._id, withdrawalDto.amount);

      return {
        status: 'success',
        message: 'Money withdrawn successfully',
        data: transaction,
      };
    } catch (err) {
      console.log(err);
      return {
        status: 'error',
        message: err.message || 'An error occurred while withdrawing money',
        data: null,
      };
    }
  }

  async transferMoney(transferDto: TransferDto): Promise<IResponse> {
    try {
      const sender = await this.userService.getUser({ _id: transferDto.user });
      if (!sender) {
        throw new NotFoundException('Sender does not exist');
      }
      const recipient = await this.userService.getUser({ _id: transferDto.transfer_to });
      if (!recipient) {
        throw new NotFoundException('Recipient does not exist');
      }
      const transaction = await this.transactionService.transfer(transferDto);

      return {
        status: 'success',
        message: 'Money transferred successfully',
        data: transaction,
      };
    } catch (err) {
      console.log(err);
      return {
        status: 'error',
        message: err.message || 'An error occurred while transferring money',
        data: null,
      };
    }
  }

  async getUserTransactions(userId: string) {
    const filterQuery = { user: userId };
    const allTransactions = await this.transactionService.getUserTransaction(filterQuery);
    return {
      data: allTransactions,
      status: 'sucess',
      message: 'All user transaction retrieved successfully',
    };
  }
}
