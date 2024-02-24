import { Controller, Post, UseGuards, Body, Get, Param } from '@nestjs/common';
import { JwtGuard, injectJoiSchema, UserAuth, MongoIDPipe } from 'src/helpers';
import { IResponse, IUserAuth } from 'src/interfaces';
import { DepositDto, WithdrawalDto, TransferDto } from './dtos';
import { TransactionProvider } from './transaction.provider';
import { depositSchema, withdrawalSchema, transferSchema } from './schema-validator';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionProvider: TransactionProvider) {}

  @Post('deposit')
  @UseGuards(JwtGuard)
  async deposit(
    @UserAuth() userAuth: any,
    @Body(injectJoiSchema(depositSchema)) depositDto: DepositDto,
  ): Promise<IResponse> {
    depositDto.user = userAuth.user;
    return this.transactionProvider.depositMoney(depositDto);
  }

  @Post('withdrawal')
  @UseGuards(JwtGuard)
  async withdraw(
    @UserAuth() userAuth: any,
    @Body(injectJoiSchema(withdrawalSchema)) wthdrawalDto: WithdrawalDto,
  ): Promise<IResponse> {
    wthdrawalDto.user = userAuth.user;
    return this.transactionProvider.withdrawMoney(wthdrawalDto);
  }

  @Post('transfer')
  @UseGuards(JwtGuard)
  async transfer(
    @UserAuth() userAuth: any,
    @Body(injectJoiSchema(transferSchema)) transferDto: TransferDto,
  ): Promise<IResponse> {
    transferDto.user = userAuth.user;
    return this.transactionProvider.transferMoney(transferDto);
  }

  @Get(':user_id')
  @UseGuards(JwtGuard)
  async getUserTransaction(
    @UserAuth() userAuth: IUserAuth,
    req,
    @Param('user_id', MongoIDPipe) user: string,
  ) {
    const response = await this.transactionProvider.getUserTransactions(user);
    return response;
  }
}
