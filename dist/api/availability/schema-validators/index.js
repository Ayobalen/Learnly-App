"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailabilitySchema = void 0;
const joi_1 = __importDefault(require("joi"));
const constants_1 = require("../../../constants");
const mongoID = joi_1.default.string().regex(/^[a-fA-F0-9]{24}$/);
const joiStr = joi_1.default.string();
const joiNum = joi_1.default.number();
const joiDate = joi_1.default.date();
exports.AvailabilitySchema = joi_1.default.object({
    consultation_rate: joiNum.required(),
    opening_time: joiDate.required(),
    closing_time: joiDate.required(),
    availability: joiStr.valid(...Object.values(constants_1.AVAILABLE_DAYS)),
});
//# sourceMappingURL=index.js.map