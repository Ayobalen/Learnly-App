"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = exports.validateEmail = exports.AdminSignUpSchema = exports.userSignUpSchema = void 0;
const Joi = __importStar(require("joi"));
const constants_1 = require("../../../constants");
const joiStr = Joi.string();
const requiredString = Joi.string().required();
exports.userSignUpSchema = Joi.object({
    phone_number: requiredString.replace(/\D/g, '').max(constants_1.PHONE_NUMBER_MAX),
    email: requiredString.lowercase().email(),
    first_name: joiStr.required(),
    last_name: joiStr.required(),
    password: joiStr
        .required()
        .min(8)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]+$/)
        .message('Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long'),
    country: joiStr.required(),
    state: joiStr.required(),
    city: joiStr.required(),
    bio: joiStr
});
exports.AdminSignUpSchema = Joi.object({
    phone_number: requiredString.replace(/\D/g, '').max(constants_1.PHONE_NUMBER_MAX),
    email: requiredString.lowercase().email(),
    first_name: joiStr.required(),
    last_name: joiStr.required(),
    password: joiStr
        .required()
        .min(8)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]+$/)
        .message('Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long'),
    country: joiStr.required(),
    state: joiStr.required(),
    city: joiStr.required(),
});
exports.validateEmail = Joi.object({
    email: requiredString.lowercase().email(),
});
exports.LoginSchema = Joi.object({
    email: joiStr.required().trim(),
    password: joiStr.min(constants_1.MIN_PASSWORD).required(),
});
//# sourceMappingURL=index.js.map