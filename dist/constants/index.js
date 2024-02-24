"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CATEGORY_URL = exports.NODE_ENV = exports.TRANSACTION_STATUS = exports.TRANSACTION_TYPE = exports.USER_STATUS = exports.USER_TYPES = exports.ENV = exports.OTP_TIME_EXP = exports.JWT_SECRET = exports.REFRESH_TOKEN_EXPIRES = exports.ACCESS_TOKEN_EXPIRES = exports.MIN_PASSWORD = exports.PHONE_NUMBER_MAX = void 0;
exports.PHONE_NUMBER_MAX = 14;
exports.MIN_PASSWORD = 6;
exports.ACCESS_TOKEN_EXPIRES = 7 * 24 * 3600;
exports.REFRESH_TOKEN_EXPIRES = 7 * 24 * 3600;
exports.JWT_SECRET = 'sec3455';
exports.OTP_TIME_EXP = 3600;
var ENV;
(function (ENV) {
    ENV["MONGO_URI"] = "MONGO_URI";
    ENV["TWILIO_ACCOUNT_SID"] = "TWILIO_ACCOUNT_SID";
    ENV["TWILIO_AUTH_TOKEN"] = "TWILIO_AUTH_TOKEN";
    ENV["NODE_ENV"] = "NODE_ENV";
    ENV["MAILGUN_DOMAIN"] = "MAILGUN_DOMAIN";
    ENV["MAILGUN_API_KEY"] = "MAILGUN_API_KEY";
    ENV["SALT_ROUNDS"] = "SALT_ROUNDS";
    ENV["TERMII_API_URL"] = "TERMII_API_URL";
    ENV["TERMII_SENDER_ID"] = "TERMII_SENDER_ID";
    ENV["TERMII_API_KEY"] = "TERMII_API_KEY";
    ENV["FLW_BASE_URL"] = "FLW_BASE_URL";
    ENV["FLW_PUBLIC_KEY"] = "FLW_PUBLIC_KEY";
    ENV["FRONTEND_BASE_URL"] = "";
    ENV["FLW_SECRET_KEY"] = "FLW_SECRET_KEY";
    ENV["FLW_LIVE_SECRET_KEY"] = "FLW_LIVE_SECRET_KEY";
    ENV["PAYMENT_REDIRECT_URL"] = "PAYMENT_REDIRECT_URL";
    ENV["FLW_SECRET_HASH"] = "pay";
    ENV["DEFAULT_PASS"] = "DEFAULT_PASS";
    ENV["REDIS_URL"] = "REDIS_URL";
})(ENV = exports.ENV || (exports.ENV = {}));
var USER_TYPES;
(function (USER_TYPES) {
    USER_TYPES["USER"] = "user";
    USER_TYPES["ADMIN"] = "admin";
})(USER_TYPES = exports.USER_TYPES || (exports.USER_TYPES = {}));
var USER_STATUS;
(function (USER_STATUS) {
    USER_STATUS["ACTIVE"] = "active";
    USER_STATUS["INACTIVE"] = "inactive";
})(USER_STATUS = exports.USER_STATUS || (exports.USER_STATUS = {}));
var TRANSACTION_TYPE;
(function (TRANSACTION_TYPE) {
    TRANSACTION_TYPE["DEPOSIT"] = "deposit";
    TRANSACTION_TYPE["WITHDRAWAL"] = "withdrawal";
    TRANSACTION_TYPE["TRANSFER"] = "transfer";
    TRANSACTION_TYPE["INITIAL"] = "initial";
})(TRANSACTION_TYPE = exports.TRANSACTION_TYPE || (exports.TRANSACTION_TYPE = {}));
var TRANSACTION_STATUS;
(function (TRANSACTION_STATUS) {
    TRANSACTION_STATUS["COMPLETED"] = "completed";
    TRANSACTION_STATUS["FAILED"] = "failed";
})(TRANSACTION_STATUS = exports.TRANSACTION_STATUS || (exports.TRANSACTION_STATUS = {}));
var NODE_ENV;
(function (NODE_ENV) {
    NODE_ENV["DEV"] = "development";
    NODE_ENV["PROD"] = "production";
    NODE_ENV["STAGING"] = "staging";
})(NODE_ENV = exports.NODE_ENV || (exports.NODE_ENV = {}));
exports.DEFAULT_CATEGORY_URL = '';
//# sourceMappingURL=index.js.map