import axios from 'axios';
import * as crypto from 'crypto';

export function randomStringGen(length: number): string {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export function getServerLocalTime() {
  return new Date(Date.now() + 60 * 60 * 1000);
}

export function randomNumberGen(length = 4): string {
  const numbers = '0123456789';
  return Array(length)
    .fill(numbers)
    .map((x) => x[Math.floor(Math.random() * x.length)])
    .join('');
}

export const getHash = (value: any = ''): string => {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  value = value.toString();
  return crypto.createHash('md5').update(value).digest('hex');
};
