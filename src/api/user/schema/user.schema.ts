import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import mongoose from 'mongoose';
import { USER_TYPES } from 'src/constants';

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
})
export class User {
  @Prop({ unique: true, lowercase: true })
  email: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop({ type: String, index: true, sparse: true })
  phone_number: string;

  @Prop({ unique: true })
  account_number: number;

  @Prop()
  country: string;

  @Prop()
  state: string;

  @Prop()
  city: string;

  @Prop({
    type: String,
    enum: Object.values(USER_TYPES),
  })
  user_type: USER_TYPES;

  @Prop({ type: Boolean, default: false })
  deleted: boolean;

  @Prop({ type: String, default: 'active' })
  status;
}

export type UserDocument = Document & User;
export const UserSchema = SchemaFactory.createForClass(User);
