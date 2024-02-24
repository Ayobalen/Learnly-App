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
exports.userReviews = exports.lawyerReviews = void 0;
const Joi = __importStar(require("joi"));
const mongoID = Joi.string().regex(/^[a-fA-F0-9]{24}$/);
const joiStr = Joi.string();
const requiredString = Joi.string().required();
const joiNum = Joi.number();
const joiArray = Joi.array();
exports.lawyerReviews = Joi.object({
    appointment: mongoID.required(),
    review: joiStr.required(),
    rating: joiNum.required(),
});
exports.userReviews = Joi.object({
    appointment: mongoID.required(),
    review: joiStr.required(),
    rating: joiNum.required(),
});
//# sourceMappingURL=index.js.map