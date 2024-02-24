import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionProvider } from './transaction.provider';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { Transaction, TransactionSchema } from './schema/transaction.schema';
import { UserService } from '../user/user.service';
import { User, UserSchema } from '../user/schema';
import { UtilService } from 'src/helpers';

@Module({
  providers: [TransactionProvider, UserService, UtilService, TransactionService],
  exports: [TransactionService],
  controllers: [TransactionController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Transaction.name,
        schema: TransactionSchema,
      },
      {
        name: User.name,
        schema: UserSchema
      }
    ]),
  ],
})
export class TransactionModule {}
