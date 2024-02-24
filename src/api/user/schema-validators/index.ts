/* eslint-disable prettier/prettier */
import * as Joi from 'joi';

const mongoID = Joi.string().regex(/^[a-fA-F0-9]{24}$/);
const joiStr = Joi.string();
const joiNum = Joi.number();
const requiredString = Joi.string().required();

export const UpdateUserSchema = Joi.object({
    country: joiStr,
    city: joiStr,
    state: joiStr,
    status: joiStr,
  })