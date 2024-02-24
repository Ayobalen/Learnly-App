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
exports.AvailabilityProvider = void 0;
const common_1 = require("@nestjs/common");
const general_helpers_1 = require("../../helpers/general.helpers");
const availability_service_1 = require("./availability.service");
let AvailabilityProvider = class AvailabilityProvider {
    constructor(availabilityService, helper) {
        this.availabilityService = availabilityService;
        this.helper = helper;
    }
    async createAvailability(AvailabilityDto) {
        const availability = await this.availabilityService.createAvailability(AvailabilityDto);
        return {
            status: 'success',
            message: 'Appointment availability created successfully',
            data: availability,
        };
    }
};
AvailabilityProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [availability_service_1.AvailabilityService,
        general_helpers_1.Helpers])
], AvailabilityProvider);
exports.AvailabilityProvider = AvailabilityProvider;
//# sourceMappingURL=availability.provider.js.map