"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuard = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
let JwtGuard = class JwtGuard {
    async canActivate(context) {
        var _a;
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        const accessToken = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!accessToken) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
        const data = (0, jsonwebtoken_1.decode)(accessToken);
        if (!data) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
        req.user = data;
        return true;
    }
};
JwtGuard = __decorate([
    (0, common_1.Injectable)()
], JwtGuard);
exports.JwtGuard = JwtGuard;
//# sourceMappingURL=jwt.guard.js.map