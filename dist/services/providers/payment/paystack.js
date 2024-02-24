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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paystack = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = __importDefault(require("axios"));
const sentry_exceptions_1 = require("../../../helpers/sentry.exceptions");
let Paystack = class Paystack {
    constructor(configService) {
        this.configService = configService;
        this.apiUrl = 'https://api.paystack.co/transaction/initialize';
        this._client = axios_1.default.create({
            baseURL: this.apiUrl,
            headers: {
                authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json',
                'cache-control': 'no-cache',
            },
        });
    }
    async genPaymentLink(payload) {
        var _a, _b;
        if (!payload) {
            throw new Error('Payload cannot be undefined or null');
        }
        try {
            const data = Object.assign(Object.assign({}, payload), { amount: payload.total_amount, callback_url: 'http://localhost:3005/api/v1/webhooks/payment-status' });
            if (payload.metadata && payload.metadata.user) {
                delete payload.metadata.user;
            }
            const response = await this._client.post('', data, this.options);
            return {
                data: { link: `${response.data.data.authorization_url}` },
            };
        }
        catch (error) {
            throw new sentry_exceptions_1.SentryException(error, (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message);
        }
    }
    async createAccount(code) {
        var _a, _b, _c, _d;
        try {
            const resp = await axios_1.default.post(`https://api.paystack.co/dedicated_account`, {
                customer: code,
            }, {
                headers: {
                    authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                },
            });
            resp.data.customer = code;
            return resp === null || resp === void 0 ? void 0 : resp.data;
        }
        catch (err) {
            let message = 'Unable to process request now, Try Again';
            if ((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) {
                message = Array.isArray((_b = err === null || err === void 0 ? void 0 : err.response) === null || _b === void 0 ? void 0 : _b.data.message)
                    ? (_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.data.message[0]
                    : (_d = err === null || err === void 0 ? void 0 : err.response) === null || _d === void 0 ? void 0 : _d.data.message;
            }
            throw new common_1.BadRequestException(message);
        }
    }
    async createCustomer(data) {
        var _a, _b, _c, _d, _e, _f;
        try {
            const resp = await axios_1.default.post(`https://api.paystack.co/customer`, {
                email: data.email,
                first_name: data.first_name,
                last_name: data.last_name,
                phone: data.phone_number,
            }, {
                headers: {
                    authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                },
            });
            return this.createAccount((_b = (_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.customer_code);
        }
        catch (err) {
            let message = 'Unable to process request now, Try Again';
            if ((_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.data) {
                message = Array.isArray((_d = err === null || err === void 0 ? void 0 : err.response) === null || _d === void 0 ? void 0 : _d.data.message)
                    ? (_e = err === null || err === void 0 ? void 0 : err.response) === null || _e === void 0 ? void 0 : _e.data.message[0]
                    : (_f = err === null || err === void 0 ? void 0 : err.response) === null || _f === void 0 ? void 0 : _f.data.message;
            }
            throw new common_1.BadRequestException(message);
        }
    }
    async verify(transaction_id) {
        var _a, _b;
        try {
            const response = await this._client.get(`/v3/transactions/${transaction_id}/verify`, this.options);
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw new sentry_exceptions_1.SentryException(error, (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message);
        }
    }
    async verifyByTransactionRef(transaction_ref) {
        var _a, _b;
        try {
            const response = await this._client.get(`/v3/transactions/verify_by_reference?tx_ref=${transaction_ref}`, this.options);
            return response.data.data;
        }
        catch (error) {
            throw new sentry_exceptions_1.SentryException(error, (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message);
        }
    }
    async resolveAccount(payload) {
        const response = await this._client.post('/v3/accounts/resolve', payload, {
            headers: { Authorization: `Bearer ${process.env.FLW_SECRET_KEY}` },
        });
        return response.data;
    }
    async refund(data) {
        var _a, _b;
        try {
            const payload = {
                amount: data.amount,
            };
            const response = await this._client.post(`/v3/transactions/${data.id}/refund`, payload, {
                headers: { Authorization: `Bearer ${process.env.FLW_SECRET_KEY}` },
            });
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw new sentry_exceptions_1.SentryException(error, (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message);
        }
    }
};
Paystack = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], Paystack);
exports.Paystack = Paystack;
//# sourceMappingURL=paystack.js.map