"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const general_helpers_1 = require("../../helpers/general.helpers");
const helpers_1 = require("../../helpers");
const user_module_1 = require("../user/user.module");
const appointment_controller_1 = require("./appointment.controller");
const appointment_provider_1 = require("./appointment.provider");
const appointment_service_1 = require("./appointment.service");
const schema_1 = require("./schema");
const availability_schema_1 = require("../availability/schema/availability.schema");
const paystack_1 = require("../../services/providers/payment/paystack");
let AppointmentModule = class AppointmentModule {
};
AppointmentModule = __decorate([
    (0, common_1.Module)({
        providers: [appointment_provider_1.AppointmentProvider, appointment_service_1.AppointmentService, general_helpers_1.Helpers, paystack_1.Paystack, helpers_1.UtilService],
        controllers: [appointment_controller_1.AppointmentController],
        exports: [appointment_service_1.AppointmentService],
        imports: [
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_1.Appointment.name,
                    schema: schema_1.AppointmentSchema,
                },
                {
                    name: availability_schema_1.Availability.name,
                    schema: availability_schema_1.AvailabilitySchema,
                },
            ]),
        ],
    })
], AppointmentModule);
exports.AppointmentModule = AppointmentModule;
//# sourceMappingURL=appointment.module.js.map