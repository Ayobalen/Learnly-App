import { DictionaryService } from './dictionary.service';
import { DictionaryDto } from './dtos';
import { IResponse } from 'src/interfaces';
export declare class DictionaryProvider {
    private readonly dictionaryService;
    constructor(dictionaryService: DictionaryService);
    createDictionary(dictionaryDto: DictionaryDto): Promise<IResponse>;
    getAllWords(query: any): Promise<IResponse>;
}
