/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/api/user/schema/user.schema';
import {  USER_TYPES } from 'src/constants';

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
})
export class UserAuth {
  @Prop({
    ref: User.name,
    type: MongooseSchema.Types.ObjectId,
  })
  user: User;

  @Prop({lowercase: true, unique: true})
  email: string;

  @Prop()
  phone_number: string;

  @Prop()
  password: string;

  @Prop({
    type: [String],
    default: [],
  })
  previousPasswords: string[];
  
  @Prop({ type: Boolean, default: false })
  deleted: boolean;
}

export type UserAuthDocument = UserAuth & Document;

export const UserAuthSchema = SchemaFactory.createForClass(UserAuth);