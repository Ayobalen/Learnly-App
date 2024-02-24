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
exports.DictionaryController = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../helpers");
const dictionary_provider_1 = require("./dictionary.provider");
const dtos_1 = require("./dtos");
const schema_validators_1 = require("./schema-validators");
let DictionaryController = class DictionaryController {
    constructor(dictionaryProvider) {
        this.dictionaryProvider = dictionaryProvider;
    }
    async createDictionary(dictionaryDto) {
        const Dictionary = await this.dictionaryProvider.createDictionary(dictionaryDto);
        return Dictionary;
    }
    async getAllWords(query) {
        const data = await this.dictionaryProvider.getAllWords(query);
        return data;
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.dictionary))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.DictionaryDto]),
    __metadata("design:returntype", Promise)
], DictionaryController.prototype, "createDictionary", null);
__decorate([
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DictionaryController.prototype, "getAllWords", null);
DictionaryController = __decorate([
    (0, common_1.Controller)('dictionary'),
    __metadata("design:paramtypes", [dictionary_provider_1.DictionaryProvider])
], DictionaryController);
exports.DictionaryController = DictionaryController;
//# sourceMappingURL=dictionary.controller.js.map