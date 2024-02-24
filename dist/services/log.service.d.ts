import { Logger } from '@nestjs/common';
export declare class LoggerService {
    logger: Logger;
    get log(): {
        (message: any, context?: string): void;
        (message: any, ...optionalParams: any[]): void;
    };
}
