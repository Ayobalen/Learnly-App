"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_stats_controller_1 = require("./user-stats.controller");
const user_stats_provider_1 = require("./user-stats.provider");
const user_stats_service_1 = require("./user-stats.service");
const schema_1 = require("../user/schema");
const schema_2 = require("../appointment/schema");
let UserStatModule = class UserStatModule {
};
UserStatModule = __decorate([
    (0, common_1.Module)({
        providers: [user_stats_provider_1.UserStatProvider, user_stats_service_1.UserStatService],
        exports: [user_stats_service_1.UserStatService],
        controllers: [user_stats_controller_1.UserStatController],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_1.User.name,
                    schema: schema_1.UserSchema,
                },
                {
                    name: schema_2.Appointment.name,
                    schema: schema_2.AppointmentSchema,
                },
            ]),
        ],
    })
], UserStatModule);
exports.UserStatModule = UserStatModule;
//# sourceMappingURL=user-stats.module.js.map