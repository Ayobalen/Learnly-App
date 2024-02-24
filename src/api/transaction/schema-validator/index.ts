import * as Joi from 'joi';

const joiStr = Joi.string();
const joiNum = Joi.number();
const requiredString = Joi.string().required();

export const depositSchema = Joi.object({
  user: joiStr,
  amount: joiNum.required(),
  transaction_type: joiStr,
  transaction_status: joiStr,
});

export const withdrawalSchema = Joi.object({
  user: joiStr,
  amount: joiNum.required()
})

export const transferSchema = Joi.object({
    user: joiStr,
    amount: joiNum.required(),
    transfer_to: joiStr
  })