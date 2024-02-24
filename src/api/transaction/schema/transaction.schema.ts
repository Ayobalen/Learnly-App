/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/api/user/schema/user.schema';
import { TRANSACTION_STATUS, TRANSACTION_TYPE } from 'src/constants';

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
})
export class Transaction {
  @Prop({
    ref: User.name,
    type: MongooseSchema.Types.ObjectId,
  })
  user: User;

  @Prop({ default: 0})
  balance: number;

  @Prop({
    ref: User.name,
    type: MongooseSchema.Types.ObjectId,
  })
  transfer_to: User;

  @Prop({
    type: String,
    enum: Object.values(TRANSACTION_TYPE),
  })
  transaction_type: TRANSACTION_TYPE;

  @Prop({
    type: String,
    enum: Object.values(TRANSACTION_STATUS),
  })
  transaction_status: TRANSACTION_STATUS;


  @Prop({
    type: Number,
  })
  amount: number

}

export type TransactionDocument = Document & Transaction;
export const TransactionSchema = SchemaFactory.createForClass(Transaction);