"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentSchema = exports.Appointment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../user/schema/user.schema");
const constants_1 = require("../../../constants");
let Appointment = class Appointment {
};
__decorate([
    (0, mongoose_1.Prop)({
        ref: user_schema_1.User.name,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", user_schema_1.User)
], Appointment.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: user_schema_1.User.name,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", user_schema_1.User)
], Appointment.prototype, "lawyer", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Appointment.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Appointment.prototype, "payment_provider", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Appointment.prototype, "meting_ref", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Appointment.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Appointment.prototype, "agora_token", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Appointment.prototype, "agora_chanel", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(constants_1.APPOINTMENT_STATUS),
    }),
    __metadata("design:type", String)
], Appointment.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Appointment.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Appointment.prototype, "start_time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Appointment.prototype, "end_time", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            rate: String,
            time: Number,
            currency: String,
            amount: String,
        },
    }),
    __metadata("design:type", Object)
], Appointment.prototype, "consultation_fee", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            rate: String,
            amount: String,
        },
    }),
    __metadata("design:type", Object)
], Appointment.prototype, "legume_fee", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            rate: String,
            amount: String,
        },
    }),
    __metadata("design:type", Object)
], Appointment.prototype, "tax", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Appointment.prototype, "total_amount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Appointment.prototype, "lawyer_fee", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Appointment.prototype, "reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(constants_1.TRANSACTION_STATUS),
    }),
    __metadata("design:type", String)
], Appointment.prototype, "transaction_status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Appointment.prototype, "Channel", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Appointment.prototype, "token", void 0);
Appointment = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    })
], Appointment);
exports.Appointment = Appointment;
exports.AppointmentSchema = mongoose_1.SchemaFactory.createForClass(Appointment);
//# sourceMappingURL=appointment.schema.js.map