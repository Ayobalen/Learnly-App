import { IResponse } from 'src/interfaces';
import { DictionaryProvider } from './dictionary.provider';
import { DictionaryDto } from './dtos';
export declare class DictionaryController {
    private readonly dictionaryProvider;
    constructor(dictionaryProvider: DictionaryProvider);
    createDictionary(dictionaryDto: DictionaryDto): Promise<IResponse>;
    getAllWords(query: any): Promise<IResponse>;
}
