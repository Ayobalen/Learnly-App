import { Injectable } from '@nestjs/common';

@Injectable()
export class Helpers {
  async randomStringGen(length: number): Promise<string> {
    const pass = 'qwertyuopasdfghjklzxcvbnmQWERTYUOPASDFGHJKLZXCVBNM234567890';
    return Array(length)
      .fill(pass)
      .map((x) => x[Math.floor(Math.random() * x.length)])
      .join('');
  }

  async convertHoursToMinutes(timeInHours) {
    return Math.floor(timeInHours * 60);
  }

  async randomNumberGen(length = 4): Promise<string> {
    const numbers = '0123456789';
    return Array(length)
      .fill(numbers)
      .map((x) => x[Math.floor(Math.random() * x.length)])
      .join('');
  }
}
