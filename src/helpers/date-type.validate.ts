/* eslint-disable prettier/prettier */
// import { UnprocessableEntityException, Injectable, PipeTransform } from '@nestjs/common';
// import { isEmpty } from 'lodash';
// import { DATE_TYPE } from 'src/constants';

// @Injectable()
// export class DateTypeValidate implements PipeTransform {
//   transform(value: any) {
//     value = isEmpty(value) ? DATE_TYPE.NONE : value;
//     const data = Object.values(DATE_TYPE);
//     if (!data?.includes(value)) {
//       throw new UnprocessableEntityException(
//         `Invalid date type query data, use one of [${[...data]}]`,
//       );
//     }
//     // if (value in data) {
//     //   throw new BadRequestException();
//     // }
//     return value;
//   }
// }
