import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';

const joiStr = Joi.string().required();

@Injectable()
export class StringParamsPipe implements PipeTransform {
  transform(value: any) {
    const { error } = joiStr.validate(value);
    if (error) {
      throw new BadRequestException(error.message);
    }

    return value;
  }
}
