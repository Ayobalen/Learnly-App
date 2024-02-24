"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailabilityModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const general_helpers_1 = require("../../helpers/general.helpers");
const helpers_1 = require("../../helpers");
const user_module_1 = require("../user/user.module");
const availability_provider_1 = require("./availability.provider");
const availability_controller_1 = require("./availability.controller");
const availability_service_1 = require("./availability.service");
const availability_schema_1 = require("./schema/availability.schema");
let AvailabilityModule = class AvailabilityModule {
};
AvailabilityModule = __decorate([
    (0, common_1.Module)({
        providers: [availability_provider_1.AvailabilityProvider, availability_service_1.AvailabilityService, general_helpers_1.Helpers, helpers_1.UtilService],
        controllers: [availability_controller_1.AvailabilityController],
        exports: [availability_service_1.AvailabilityService],
        imports: [
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: availability_schema_1.Availability.name,
                    schema: availability_schema_1.AvailabilitySchema,
                },
            ]),
        ],
    })
], AvailabilityModule);
exports.AvailabilityModule = AvailabilityModule;
//# sourceMappingURL=availability.module.js.map