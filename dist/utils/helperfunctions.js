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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHash = exports.randomNumberGen = exports.getServerLocalTime = exports.randomStringGen = void 0;
const crypto = __importStar(require("crypto"));
function randomStringGen(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
exports.randomStringGen = randomStringGen;
function getServerLocalTime() {
    return new Date(Date.now() + 60 * 60 * 1000);
}
exports.getServerLocalTime = getServerLocalTime;
function randomNumberGen(length = 4) {
    const numbers = '0123456789';
    return Array(length)
        .fill(numbers)
        .map((x) => x[Math.floor(Math.random() * x.length)])
        .join('');
}
exports.randomNumberGen = randomNumberGen;
const getHash = (value = '') => {
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }
    value = value.toString();
    return crypto.createHash('md5').update(value).digest('hex');
};
exports.getHash = getHash;
//# sourceMappingURL=helperfunctions.js.map