/* eslint-disable prettier/prettier */
// import { UnprocessableEntityException, Injectable, PipeTransform } from '@nestjs/common';
// import { isEmpty } from 'lodash';
// import { ORDER_STATUS } from 'src/constants';

// @Injectable()
// export class OrderStatusValidate implements PipeTransform {
//   transform(value: any) {
//     value = isEmpty(value) ? 'ALL' : value;
//     const data = Object.values(ORDER_STATUS);
//     if (!data?.includes(value)) {
//       throw new UnprocessableEntityException(
//         'Invalid status query data, use [ORDERED, RETURNED, SHIPPED, DELIVERED, CANCELLED, PENDING]',
//       );
//     }
//     // if (value in data) {
//     //   throw new BadRequestException();
//     // }
//     return value;
//   }
// }
