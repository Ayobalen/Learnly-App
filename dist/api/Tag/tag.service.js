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
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const lodash_1 = require("lodash");
const helpers_1 = require("../../helpers");
const schema_1 = require("./schema");
let TagsService = class TagsService {
    constructor(tagModel, utilService) {
        this.tagModel = tagModel;
        this.utilService = utilService;
    }
    async createTag(data) {
        const tag = await this.tagModel.create(data);
        return tag;
    }
    async getTag(filterQuery) {
        const tag = await this.tagModel.findOne(filterQuery);
        return tag;
    }
    async getTags(filterQuery, paginationQuery) {
        const count = await this.tagModel.countDocuments(filterQuery);
        const { limit, offset, totalPages } = this.utilService.getPaginationData(paginationQuery, count);
        const data = (0, lodash_1.isEmpty)(paginationQuery)
            ? await this.tagModel.find(filterQuery).sort({ createdAt: -1 })
            : await this.tagModel.find(filterQuery).limit(limit).skip(offset).sort({ createdAt: -1 });
        return {
            data,
            totalPages,
            count,
        };
    }
    async updateTag(filterQuery, updateQuery, options) {
        const tag = await this.tagModel.findOneAndUpdate(filterQuery, updateQuery, options);
        return tag;
    }
    async deleteTag(filterQuery) {
        const tag = await this.tagModel.findOneAndDelete(filterQuery);
        return tag;
    }
};
TagsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Tags.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        helpers_1.UtilService])
], TagsService);
exports.TagsService = TagsService;
//# sourceMappingURL=tag.service.js.map