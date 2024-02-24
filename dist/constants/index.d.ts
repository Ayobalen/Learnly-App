export declare const PHONE_NUMBER_MAX = 14;
export declare const MIN_PASSWORD = 6;
export declare const ACCESS_TOKEN_EXPIRES: number;
export declare const REFRESH_TOKEN_EXPIRES: number;
export declare const JWT_SECRET = "sec3455";
export declare const OTP_TIME_EXP = 3600;
export declare enum ENV {
    MONGO_URI = "MONGO_URI",
    TWILIO_ACCOUNT_SID = "TWILIO_ACCOUNT_SID",
    TWILIO_AUTH_TOKEN = "TWILIO_AUTH_TOKEN",
    NODE_ENV = "NODE_ENV",
    MAILGUN_DOMAIN = "MAILGUN_DOMAIN",
    MAILGUN_API_KEY = "MAILGUN_API_KEY",
    SALT_ROUNDS = "SALT_ROUNDS",
    TERMII_API_URL = "TERMII_API_URL",
    TERMII_SENDER_ID = "TERMII_SENDER_ID",
    TERMII_API_KEY = "TERMII_API_KEY",
    FLW_BASE_URL = "FLW_BASE_URL",
    FLW_PUBLIC_KEY = "FLW_PUBLIC_KEY",
    FRONTEND_BASE_URL = "",
    FLW_SECRET_KEY = "FLW_SECRET_KEY",
    FLW_LIVE_SECRET_KEY = "FLW_LIVE_SECRET_KEY",
    PAYMENT_REDIRECT_URL = "PAYMENT_REDIRECT_URL",
    FLW_SECRET_HASH = "pay",
    DEFAULT_PASS = "DEFAULT_PASS",
    REDIS_URL = "REDIS_URL"
}
export declare enum USER_TYPES {
    USER = "user",
    ADMIN = "admin"
}
export declare enum USER_STATUS {
    ACTIVE = "active",
    INACTIVE = "inactive"
}
export declare enum TRANSACTION_TYPE {
    DEPOSIT = "deposit",
    WITHDRAWAL = "withdrawal",
    TRANSFER = "transfer",
    INITIAL = "initial"
}
export declare enum TRANSACTION_STATUS {
    COMPLETED = "completed",
    FAILED = "failed"
}
export declare enum NODE_ENV {
    DEV = "development",
    PROD = "production",
    STAGING = "staging"
}
export declare const DEFAULT_CATEGORY_URL = "";
