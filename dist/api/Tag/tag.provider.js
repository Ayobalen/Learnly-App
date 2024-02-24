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
exports.TagsProvider = void 0;
const common_1 = require("@nestjs/common");
const tag_service_1 = require("./tag.service");
let TagsProvider = class TagsProvider {
    constructor(tagsService) {
        this.tagsService = tagsService;
    }
    async createTag(tagsDto) {
        const tagExist = await this.tagsService.getTag({
            name: tagsDto.name,
        });
        if (tagExist) {
            throw new common_1.BadRequestException('Tag with this name already exist. Please change the name');
        }
        const tag = await this.tagsService.createTag(Object.assign({}, tagsDto));
        return {
            status: 'success',
            message: 'Tag created successfully',
            data: tag,
        };
    }
    async getTag(id) {
        const oneTag = await this.tagsService.getTag({
            _id: id,
        });
        if (!oneTag) {
            return {
                status: 'success',
                message: 'Tag Not Found',
                data: [],
            };
        }
        return {
            status: 'success',
            message: 'Tag fetched successfully',
            data: oneTag,
        };
    }
    async getTags(query) {
        let _query = Object.assign({}, query);
        const paginationQuery = {};
        if (_query.page) {
            paginationQuery.page = Number(_query.page);
            delete _query.page;
        }
        if (_query.limit) {
            paginationQuery.limit = Number(_query.limit);
            delete _query.limit;
        }
        if (_query.search) {
            _query = { name: { $regex: _query.search, $options: 'i' } };
        }
        if (_query.start_date && _query.end_date) {
            _query = {
                createdAt: { $gte: new Date(_query.start_date), $lt: new Date(_query.end_date) },
            };
        }
        const { count, totalPages, data } = await this.tagsService.getTags(_query, paginationQuery);
        return {
            status: 'success',
            message: 'Tags successfully retrieved',
            data: data,
            meta: {
                count,
                totalPages,
            },
        };
    }
    async updateTag(id, data) {
        const response = await this.tagsService.updateTag({
            _id: id,
        }, data, {
            new: true,
        });
        if (!response) {
            throw new common_1.NotFoundException('Tag not found');
        }
        return {
            status: 'success',
            message: 'Tag updated successfully',
            data: response,
        };
    }
    async deleteTag(id) {
        const deletedTag = await this.tagsService.deleteTag({
            _id: id,
        });
        if (!deletedTag) {
            return {
                status: 'success',
                message: 'Tag Not Found',
                data: [],
            };
        }
        return {
            status: 'success',
            message: 'Tag deleted successfully',
            data: [],
        };
    }
};
TagsProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tag_service_1.TagsService])
], TagsProvider);
exports.TagsProvider = TagsProvider;
//# sourceMappingURL=tag.provider.js.map