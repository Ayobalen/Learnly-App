import { PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';
export declare class JoiValidationPipe implements PipeTransform {
    private schema;
    constructor(schema: ObjectSchema);
    transform(_value: any): any;
}
export declare const injectJoiSchema: (schema: ObjectSchema) => JoiValidationPipe;
