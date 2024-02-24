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
exports.DictionaryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("./schema");
let DictionaryService = class DictionaryService {
    constructor(dictionaryModel) {
        this.dictionaryModel = dictionaryModel;
    }
    async createDictionary(data) {
        const word = await this.dictionaryModel.create(data);
        return word;
    }
    ;
    async getWord(filterQuery) {
        const word = await this.dictionaryModel.findOne(filterQuery);
        return word;
    }
    async getAllWords(filterQuery) {
        const data = await this.dictionaryModel.find(filterQuery).sort({ createdAt: -1 });
        const count = data.length;
        return {
            data,
            count,
        };
    }
};
DictionaryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Dictionary.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DictionaryService);
exports.DictionaryService = DictionaryService;
//# sourceMappingURL=dictionary.service.js.map