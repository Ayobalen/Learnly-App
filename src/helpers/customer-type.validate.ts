/* eslint-disable prettier/prettier */
// import { UnprocessableEntityException, Injectable, PipeTransform } from '@nestjs/common';
// import { isEmpty } from 'lodash';
// import { CUSTOMER_TYPE } from 'src/constants';

// @Injectable()
// export class CustomerTypeValidate implements PipeTransform {
//   transform(value: any) {
//     value = isEmpty(value) ? 'ALL' : value;
//     const data = Object.values(CUSTOMER_TYPE);
//     if (!data?.includes(value)) {
//       throw new UnprocessableEntityException(
//         'Invalid customer type query data, use one of [NEW, RETURNING]',
//       );
//     }
//     // if (value in data) {
//     //   throw new BadRequestException();
//     // }
//     return value;
//   }
// }
