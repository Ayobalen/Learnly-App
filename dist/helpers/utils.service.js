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
exports.UtilService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const bcrypt_1 = require("bcrypt");
let UtilService = class UtilService {
    constructor(configService) {
        this.configService = configService;
        this.randomStringGen = (length) => {
            const pass = 'qwertyuopasdfghjklzxcvbnmQWERTYUOPASDFGHJKLZXCVBNM234567890';
            return Array(length)
                .fill(pass)
                .map((x) => x[Math.floor(Math.random() * x.length)])
                .join('');
        };
    }
    calculatePercent(part, whole) {
        if (part === undefined || whole === undefined) {
            return 0;
        }
        else {
            const percent = (part / whole) * 100;
            return percent || 0;
        }
    }
    deepUpdateResource(resource, data) {
        for (const key in data) {
            if (this.checkIsObject(data[key])) {
                this.deepUpdateResource(resource[key], data[key]);
            }
            else {
                resource[key] = data[key];
            }
        }
        return resource;
    }
    checkIsObject(data) {
        return typeof data === 'object' && !Array.isArray(data);
    }
    getPaginationData(query, count) {
        var _a, _b;
        if (!query) {
            return {
                limit: null,
                offset: null,
                totalPages: null,
            };
        }
        const skip = (_a = query.page) !== null && _a !== void 0 ? _a : 1;
        const limit = (_b = query.limit) !== null && _b !== void 0 ? _b : 10;
        const offset = (skip - 1) * limit;
        const totalPages = Math.ceil(count / limit);
        return {
            limit,
            offset,
            totalPages,
        };
    }
    async getHashedPwd(password) {
        const salt = await (0, bcrypt_1.genSalt)();
        return (0, bcrypt_1.hash)(password, salt);
    }
    async comparePassword(pwd, hashedPwd) {
        return (0, bcrypt_1.compare)(pwd, hashedPwd);
    }
    convertMetersToMiles(meters) {
        if (!meters)
            throw new common_1.NotAcceptableException('Meters cannot be empty');
        return meters * 0.000621371192;
    }
    convertSecsToMinutes(secs) {
        if (!secs)
            throw new common_1.NotAcceptableException('Secs cannot be empty');
        return secs / 60;
    }
    calculatePercentageChange(previousValue, currentValue) {
        const diffFactor = (currentValue - previousValue) / previousValue;
        if (diffFactor === 0) {
            return Math.round(currentValue * 100);
        }
        else if (Number.isNaN(diffFactor)) {
            return 0;
        }
        else if (diffFactor === Infinity) {
            return Math.round(-currentValue * 100);
        }
        else {
            return Math.round(diffFactor * 100);
        }
    }
    nonNull(arr) {
        return arr.every((v) => v !== null && v !== undefined);
    }
};
UtilService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UtilService);
exports.UtilService = UtilService;
//# sourceMappingURL=utils.service.js.map