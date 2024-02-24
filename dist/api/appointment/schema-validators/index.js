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
exports.UpdateAppointmentSchema = exports.AppointmentSchema = void 0;
const Joi = __importStar(require("joi"));
const constants_1 = require("../../../constants");
const mongoID = Joi.string().regex(/^[a-fA-F0-9]{24}$/);
const joiStr = Joi.string();
const joiArray = Joi.array();
const joiNum = Joi.number();
const joiDate = Joi.date();
const appointment = Joi.object({
    time: joiStr,
    date: joiDate,
    status: joiStr.valid(...Object.values(constants_1.APPOINTMENT_STATUS)),
});
exports.AppointmentSchema = Joi.object({
    user: mongoID,
    lawyer: mongoID.required(),
    description: joiStr.required(),
    status: joiStr.valid(...Object.values(constants_1.APPOINTMENT_STATUS)),
    location: joiStr.required(),
    date: joiDate.required(),
    start_time: joiStr.required(),
    end_time: Joi.string().required(),
    meeting_link: joiStr,
    consultation_fee: Joi.object({
        rate: joiStr,
        time: joiNum,
        currency: joiStr,
        amount: joiStr,
    }).required(),
    legume_fee: Joi.object({
        amount: joiStr,
    }),
    tax: Joi.object({
        amount: joiStr,
    }),
    total_amount: joiStr,
    lawyer_fee: joiStr,
});
exports.UpdateAppointmentSchema = Joi.object({
    lawyer: mongoID.required(),
    description: joiStr.required(),
    status: joiStr.valid(...Object.values(constants_1.APPOINTMENT_STATUS)),
    location: joiStr.required(),
    date: joiDate.required(),
    start_time: joiStr.required(),
    end_time: Joi.string().required(),
    meeting_link: joiStr,
    consultation_fee: Joi.object({
        rate: joiStr,
        time: joiNum,
        currency: joiStr,
        amount: joiStr,
    }).required(),
    legume_fee: Joi.object({
        amount: joiStr,
    }),
    tax: Joi.object({
        amount: joiStr,
    }),
    total_amount: joiStr,
    lawyer_fee: joiStr,
});
//# sourceMappingURL=index.js.map