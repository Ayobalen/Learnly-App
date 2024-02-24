import { TagsDto } from './dtos';
import { TagsService } from './tag.service';
import { IResponse } from 'src/interfaces';
export declare class TagsProvider {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    createTag(tagsDto: TagsDto): Promise<IResponse>;
    getTag(id: string): Promise<IResponse>;
    getTags(query: any): Promise<IResponse>;
    updateTag(id: string, data: TagsDto): Promise<IResponse>;
    deleteTag(id: string): Promise<IResponse>;
}
