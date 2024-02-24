export const PHONE_NUMBER_MAX = 14;
export const MIN_PASSWORD = 6;
export const ACCESS_TOKEN_EXPIRES = 7 * 24 * 3600;
export const REFRESH_TOKEN_EXPIRES = 7 * 24 * 3600;
export const JWT_SECRET = 'sec3455';
export const OTP_TIME_EXP = 3600;

export enum USER_TYPES {
  USER = 'user',
  ADMIN = 'admin'
}

export enum USER_STATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export enum TRANSACTION_TYPE {
  DEPOSIT = 'deposit',
  WITHDRAWAL = 'withdrawal',
  TRANSFER = 'transfer',
  INITIAL = 'initial'
}

export enum TRANSACTION_STATUS {
  COMPLETED = 'completed',
  FAILED = 'failed'
}

export enum NODE_ENV {
  DEV = 'development',
  PROD = 'production',
  STAGING = 'staging',
}

export const DEFAULT_CATEGORY_URL = '';
