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
exports.SupportController = void 0;
const common_1 = require("@nestjs/common");
const support_provider_1 = require("./support.provider");
const dtos_1 = require("./dtos");
const schema_validators_1 = require("./schema-validators");
const helpers_1 = require("../../helpers");
let SupportController = class SupportController {
    constructor(supportProvider) {
        this.supportProvider = supportProvider;
    }
    async createSupport(supportDto) {
        return this.supportProvider.createSupport(supportDto);
    }
};
__decorate([
    (0, common_1.Post)('support-request'),
    __param(0, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.supportSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.SupportDto]),
    __metadata("design:returntype", Promise)
], SupportController.prototype, "createSupport", null);
SupportController = __decorate([
    (0, common_1.Controller)('support'),
    __metadata("design:paramtypes", [support_provider_1.SupportProvider])
], SupportController);
exports.SupportController = SupportController;
//# sourceMappingURL=support.controller.js.map