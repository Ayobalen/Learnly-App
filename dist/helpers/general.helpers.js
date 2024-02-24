"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helpers = void 0;
const common_1 = require("@nestjs/common");
let Helpers = class Helpers {
    async randomStringGen(length) {
        const pass = 'qwertyuopasdfghjklzxcvbnmQWERTYUOPASDFGHJKLZXCVBNM234567890';
        return Array(length)
            .fill(pass)
            .map((x) => x[Math.floor(Math.random() * x.length)])
            .join('');
    }
    async convertHoursToMinutes(timeInHours) {
        return Math.floor(timeInHours * 60);
    }
    async randomNumberGen(length = 4) {
        const numbers = '0123456789';
        return Array(length)
            .fill(numbers)
            .map((x) => x[Math.floor(Math.random() * x.length)])
            .join('');
    }
};
Helpers = __decorate([
    (0, common_1.Injectable)()
], Helpers);
exports.Helpers = Helpers;
//# sourceMappingURL=general.helpers.js.map