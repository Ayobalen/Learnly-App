/* eslint-disable prettier/prettier */
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { genSalt, hash, compare } from 'bcrypt';
import { PaginationQuery } from 'src/interfaces';

@Injectable()
export class UtilService {
  constructor(private readonly configService: ConfigService) {}

  calculatePercent(part: number, whole: number): number {
    if (part === undefined || whole === undefined) {
      return 0;
    } else {
      const percent: number = (part / whole) * 100;
      return percent || 0;
    }
  }

  deepUpdateResource(resource, data) {
    for (const key in data) {
      if (this.checkIsObject(data[key])) {
        this.deepUpdateResource(resource[key], data[key]);
      } else {
        resource[key] = data[key];
      }
    }
    return resource;
  }

  checkIsObject(data) {
    return typeof data === 'object' && !Array.isArray(data);
  }

  getPaginationData(query: PaginationQuery, count: number) {
    if (!query) {
      return {
        limit: null,
        offset: null,
        totalPages: null,
      };
    }

    const skip = query.page ?? 1;
    const limit = query.limit ?? 10;
    const offset = (skip - 1) * limit;
    const totalPages = Math.ceil(count / limit);

    return {
      limit,
      offset,
      totalPages,
    };
  }

  async getHashedPwd(password: string) {
    const salt = await genSalt();
    return hash(password, salt);
  }

  async comparePassword(pwd: string, hashedPwd) {
    return compare(pwd, hashedPwd);
  }

  convertMetersToMiles(meters: number) {
    if (!meters) throw new NotAcceptableException('Meters cannot be empty');
    return meters * 0.000621371192;
  }

  convertSecsToMinutes(secs: number) {
    if (!secs) throw new NotAcceptableException('Secs cannot be empty');
    return secs / 60;
  }
  calculatePercentageChange(previousValue, currentValue) {
    const diffFactor = (currentValue - previousValue) / previousValue;
    // previous value is greater than zero and current value is 0 e.g 0/5
    if (diffFactor === 0) {
      return Math.round(currentValue * 100);
    }
    // current value and previous value are both zero e.g 0/0
    else if (Number.isNaN(diffFactor)) {
      return 0;
    }

    // current value  is greater than zero and previous value is 0 e.g 5/0
    else if (diffFactor === Infinity) {
      return Math.round(-currentValue * 100);
    } else {
      return Math.round(diffFactor * 100);
    }
  }
  nonNull<T>(arr: (T | null | undefined)[]): arr is T[] {
    return arr.every((v) => v !== null && v !== undefined);
  }

  randomStringGen = (length) => {
    const pass = 'qwertyuopasdfghjklzxcvbnmQWERTYUOPASDFGHJKLZXCVBNM234567890';
    return Array(length)
      .fill(pass)
      .map((x) => x[Math.floor(Math.random() * x.length)])
      .join('');
  };
}
