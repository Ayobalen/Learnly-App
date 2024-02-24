import { SupportProvider } from './support.provider';
import { IResponse } from 'src/interfaces';
import { SupportDto } from './dtos';
export declare class SupportController {
    private readonly supportProvider;
    constructor(supportProvider: SupportProvider);
    createSupport(supportDto: SupportDto): Promise<IResponse>;
}
