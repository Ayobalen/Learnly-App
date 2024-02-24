import * as Joi from 'joi';
import {
  MIN_PASSWORD,
  PHONE_NUMBER_MAX
} from 'src/constants';
import { LoginDto } from '../dtos';

const joiStr = Joi.string();
const requiredString = Joi.string().required();

export const userSignUpSchema = Joi.object({
  phone_number: requiredString.replace(/\D/g, '').max(PHONE_NUMBER_MAX),
  email: requiredString.lowercase().email(),
  first_name: joiStr.required(),
  last_name: joiStr.required(),
  password: joiStr
  .required()
  .min(8)
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]+$/)
  .message(
    'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long'
  ),
  country: joiStr.required(),
  state: joiStr.required(),
  city: joiStr.required(),
  bio: joiStr
});

export const AdminSignUpSchema = Joi.object({
  phone_number: requiredString.replace(/\D/g, '').max(PHONE_NUMBER_MAX),
  email: requiredString.lowercase().email(),
  first_name: joiStr.required(),
  last_name: joiStr.required(),
  password: joiStr
  .required()
  .min(8)
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]+$/)
  .message(
    'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long'
  ),
  country: joiStr.required(),
  state: joiStr.required(),
  city: joiStr.required(),
});

export const validateEmail = Joi.object({
  email: requiredString.lowercase().email(),
})

export const LoginSchema = Joi.object<LoginDto>({
      email: joiStr.required().trim(),
      password: joiStr.min(MIN_PASSWORD).required(),
    });
