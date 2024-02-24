"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const auth_controller_1 = require("./auth.controller");
const auth_provider_1 = require("./auth.provider");
const constants_1 = require("../../constants");
const user_module_1 = require("../user/user.module");
const mongoose_1 = require("@nestjs/mongoose");
const services_1 = require("../../services");
const schema_1 = require("./schema");
const helpers_1 = require("../../helpers");
const schema_2 = require("../user/schema");
const general_helpers_1 = require("../../helpers/general.helpers");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({ secret: constants_1.JWT_SECRET }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_2.User.name,
                    schema: schema_2.UserSchema,
                },
                {
                    name: schema_1.UserToken.name,
                    schema: schema_1.UserTokenSchema,
                },
                {
                    name: schema_1.UserAuth.name,
                    schema: schema_1.UserAuthSchema,
                },
            ]),
        ],
        providers: [auth_provider_1.AuthProvider, services_1.AuthService, helpers_1.UtilService, general_helpers_1.Helpers],
        controllers: [auth_controller_1.AuthController],
        exports: [services_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map