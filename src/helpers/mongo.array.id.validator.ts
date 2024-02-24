import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';

const mongoIDArray = Joi.alternatives().try(
  Joi.array()
    .items(Joi.string().regex(/^[a-fA-F0-9]{24}$/))
    .min(1),
  Joi.string().regex(/^[a-fA-F0-9]{24}$/),
);

@Injectable()
export class MongoIDArrayPipe implements PipeTransform {
  transform(value: any) {
    const { error } = mongoIDArray.validate(value);
    if (error) {
      throw new BadRequestException(error.message);
    }

    return value;
  }
}
