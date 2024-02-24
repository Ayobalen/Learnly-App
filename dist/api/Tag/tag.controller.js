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
exports.TagsController = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("./dtos");
const helpers_1 = require("../../helpers");
const tag_provider_1 = require("./tag.provider");
const schema_validators_1 = require("./schema-validators");
let TagsController = class TagsController {
    constructor(tagsProvider) {
        this.tagsProvider = tagsProvider;
    }
    async getTags(query) {
        const data = await this.tagsProvider.getTags(query);
        return data;
    }
    async createTags(tagsDto) {
        const data = await this.tagsProvider.createTag(tagsDto);
        return data;
    }
    async getTag(id) {
        const data = await this.tagsProvider.getTag(id);
        return data;
    }
    async updateTags(tagsDto, id) {
        return this.tagsProvider.updateTag(id, tagsDto);
    }
    async deleteTag(id) {
        const response = await this.tagsProvider.deleteTag(id);
        return response;
    }
};
__decorate([
    (0, common_1.Get)('all'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "getTags", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.tags))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.TagsDto]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "createTags", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Param)('id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "getTag", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.tags))),
    __param(1, (0, common_1.Param)('id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.TagsDto, String]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "updateTags", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Param)('id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "deleteTag", null);
TagsController = __decorate([
    (0, common_1.Controller)('tags'),
    __metadata("design:paramtypes", [tag_provider_1.TagsProvider])
], TagsController);
exports.TagsController = TagsController;
//# sourceMappingURL=tag.controller.js.map