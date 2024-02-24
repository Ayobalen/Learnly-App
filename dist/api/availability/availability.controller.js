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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailabilityController = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../helpers");
const dtos_1 = require("./dtos");
const availability_provider_1 = require("./availability.provider");
const schema_validators_1 = require("./schema-validators");
let AvailabilityController = class AvailabilityController {
    constructor(availabilityProvider) {
        this.availabilityProvider = availabilityProvider;
    }
    async createAvailability(userAuth, AvailabilityDto) {
        AvailabilityDto.lawyer = userAuth.user;
        return this.availabilityProvider.createAvailability(AvailabilityDto);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, helpers_1.UserAuth)()),
    __param(1, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.AvailabilitySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.availabilityDto]),
    __metadata("design:returntype", Promise)
], AvailabilityController.prototype, "createAvailability", null);
AvailabilityController = __decorate([
    (0, common_1.Controller)('availability'),
    __metadata("design:paramtypes", [availability_provider_1.AvailabilityProvider])
], AvailabilityController);
exports.AvailabilityController = AvailabilityController;
//# sourceMappingURL=availability.controller.js.map