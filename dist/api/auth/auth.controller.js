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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../helpers");
const auth_provider_1 = require("./auth.provider");
const dtos_1 = require("./dtos");
const schema_validators_1 = require("./schema-validators");
const user_service_1 = require("../user/user.service");
let AuthController = class AuthController {
    constructor(authProvider, userService) {
        this.authProvider = authProvider;
        this.userService = userService;
    }
    async signUpAdmin(signUpDto) {
        const data = await this.authProvider.signUpAdmin(signUpDto);
        return data;
    }
    async signUpPatient(signUpDto, res) {
        const data = await this.authProvider.signUpUser(signUpDto);
        res.status(common_1.HttpStatus.OK);
        return data;
    }
    async login(userAuth, payload) {
        const data = await this.authProvider.login(payload);
        return data;
    }
};
__decorate([
    (0, common_1.Post)('/admin'),
    __param(0, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.AdminSignUpSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.adminSignUpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUpAdmin", null);
__decorate([
    (0, common_1.Post)('/user'),
    __param(0, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.userSignUpSchema))),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.userSignUpDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUpPatient", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, helpers_1.UserAuth)()),
    __param(1, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.LoginSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_provider_1.AuthProvider,
        user_service_1.UserService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map