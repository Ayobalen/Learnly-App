"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let ErrorInterceptor = class ErrorInterceptor {
    constructor() {
        this.logger = new common_1.Logger();
    }
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.catchError)((err) => {
            if (err instanceof common_1.NotFoundException) {
                return (0, rxjs_1.throwError)(() => new common_1.NotFoundException(err.message));
            }
            if (err instanceof common_1.BadRequestException) {
                return (0, rxjs_1.throwError)(() => new common_1.BadRequestException(err.message));
            }
            if (err instanceof common_1.UnauthorizedException) {
                return (0, rxjs_1.throwError)(() => new common_1.UnauthorizedException(err.message));
            }
            if (err instanceof common_1.ForbiddenException) {
                return (0, rxjs_1.throwError)(() => new common_1.ForbiddenException(err.message));
            }
            if (err instanceof common_1.UnprocessableEntityException) {
                return (0, rxjs_1.throwError)(() => new common_1.UnprocessableEntityException(err.message));
            }
            this.logger.log(err.stack);
            return (0, rxjs_1.throwError)(() => new common_1.InternalServerErrorException(err.message));
        }));
    }
};
ErrorInterceptor = __decorate([
    (0, common_1.Injectable)()
], ErrorInterceptor);
exports.ErrorInterceptor = ErrorInterceptor;
//# sourceMappingURL=error.interceptor.js.map