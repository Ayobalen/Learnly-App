import { SupportService } from './support.service';
import { IResponse } from 'src/interfaces';
import { SupportDto } from './dtos';
export declare class SupportProvider {
    private readonly supportService;
    constructor(supportService: SupportService);
    createSupport(supportDto: SupportDto): Promise<IResponse>;
}
