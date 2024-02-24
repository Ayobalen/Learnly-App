/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/api/user/schema/user.schema';

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
})
export class UserToken {
  @Prop({
    required: true,
    unique: true,
    ref: User.name,
    type: MongooseSchema.Types.ObjectId,
  })
  user: User;

  @Prop()
  access_token: string;

  @Prop()
  refresh_token: string;
}

export type UserTokenDocument = Document & UserToken;
export const UserTokenSchema = SchemaFactory.createForClass(UserToken);
