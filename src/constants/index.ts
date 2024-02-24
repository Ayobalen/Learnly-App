export const PHONE_NUMBER_MAX = 14;
export const MIN_PASSWORD = 6;
export const ACCESS_TOKEN_EXPIRES = 7 * 24 * 3600;
export const REFRESH_TOKEN_EXPIRES = 7 * 24 * 3600;
export const JWT_SECRET = 'sec3455';
export const OTP_TIME_EXP = 3600;
export enum ENV {
  MONGO_URI = 'MONGO_URI',
  TWILIO_ACCOUNT_SID = 'TWILIO_ACCOUNT_SID',
  TWILIO_AUTH_TOKEN = 'TWILIO_AUTH_TOKEN',
  NODE_ENV = 'NODE_ENV',
  MAILGUN_DOMAIN = 'MAILGUN_DOMAIN',
  MAILGUN_API_KEY = 'MAILGUN_API_KEY',
  SALT_ROUNDS = 'SALT_ROUNDS',
  TERMII_API_URL = 'TERMII_API_URL',
  TERMII_SENDER_ID = 'TERMII_SENDER_ID',
  TERMII_API_KEY = 'TERMII_API_KEY',
  FLW_BASE_URL = 'FLW_BASE_URL',
  FLW_PUBLIC_KEY = 'FLW_PUBLIC_KEY',
  FRONTEND_BASE_URL = '',
  FLW_SECRET_KEY = 'FLW_SECRET_KEY',
  FLW_LIVE_SECRET_KEY = 'FLW_LIVE_SECRET_KEY',
  PAYMENT_REDIRECT_URL = 'PAYMENT_REDIRECT_URL',
  FLW_SECRET_HASH = 'pay',
  DEFAULT_PASS = 'DEFAULT_PASS',
  REDIS_URL = 'REDIS_URL',
}

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
