import { TagsDto } from './dtos';
import { TagsProvider } from './tag.provider';
export declare class TagsController {
    private readonly tagsProvider;
    constructor(tagsProvider: TagsProvider);
    getTags(query: any): Promise<import("../../interfaces").IResponse>;
    createTags(tagsDto: TagsDto): Promise<import("../../interfaces").IResponse>;
    getTag(id: string): Promise<import("../../interfaces").IResponse>;
    updateTags(tagsDto: TagsDto, id: string): Promise<import("../../interfaces").IResponse>;
    deleteTag(id: string): Promise<import("../../interfaces").IResponse>;
}
