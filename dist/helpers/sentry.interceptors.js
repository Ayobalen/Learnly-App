"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentryInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const Sentry = __importStar(require("@sentry/core"));
const sentry_exceptions_1 = require("./sentry.exceptions");
const axios_1 = require("axios");
let SentryInterceptor = class SentryInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const payload = request.body;
        const routePath = request.route.path;
        const routeParams = context.getArgs()[0].params;
        return next.handle().pipe((0, operators_1.catchError)((exception) => {
            Sentry.withScope((scope) => {
                if (user) {
                    scope.setUser({ email: user.email });
                }
                if (payload) {
                    scope.setContext('Request Payload', { body: JSON.stringify(payload) });
                }
                if (exception instanceof axios_1.AxiosError) {
                    const errorMessage = exception.response.data.message;
                    scope.setExtra('axiosErrorMessage', errorMessage);
                }
                scope.setExtra('path', routePath);
                for (const key of Object.keys(routeParams)) {
                    scope.setExtra(key, routeParams[key]);
                }
                Sentry.captureException(exception);
            });
            if (exception instanceof common_1.InternalServerErrorException ||
                exception instanceof sentry_exceptions_1.SentryException ||
                exception instanceof axios_1.AxiosError) {
                let message = 'An unexpected error occurred. Please try again later or contact support if the issue persists.';
                if (exception instanceof sentry_exceptions_1.SentryException && exception.message) {
                    message = exception.message;
                }
                return (0, rxjs_1.throwError)(() => new common_1.BadRequestException(message));
            }
            else {
                return (0, rxjs_1.throwError)(() => exception);
            }
        }));
    }
};
SentryInterceptor = __decorate([
    (0, common_1.Injectable)()
], SentryInterceptor);
exports.SentryInterceptor = SentryInterceptor;
//# sourceMappingURL=sentry.interceptors.js.map