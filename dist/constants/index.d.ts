export declare const PHONE_NUMBER_MAX = 14;
export declare const MIN_PASSWORD = 6;
export declare const ACCESS_TOKEN_EXPIRES: number;
export declare const REFRESH_TOKEN_EXPIRES: number;
export declare const JWT_SECRET = "sec3455";
export declare const OTP_TIME_EXP = 3600;
export declare enum ENV {
    MONGO_URI = "MONGO_URI",
    NODE_ENV = "NODE_ENV"
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
