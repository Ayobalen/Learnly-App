import { ConfigService } from '@nestjs/config';
import { PaginationQuery } from 'src/interfaces';
export declare class UtilService {
    private readonly configService;
    constructor(configService: ConfigService);
    calculatePercent(part: number, whole: number): number;
    deepUpdateResource(resource: any, data: any): any;
    checkIsObject(data: any): boolean;
    getPaginationData(query: PaginationQuery, count: number): {
        limit: number;
        offset: number;
        totalPages: number;
    };
    getHashedPwd(password: string): Promise<string>;
    comparePassword(pwd: string, hashedPwd: any): Promise<boolean>;
    convertMetersToMiles(meters: number): number;
    convertSecsToMinutes(secs: number): number;
    calculatePercentageChange(previousValue: any, currentValue: any): number;
    nonNull<T>(arr: (T | null | undefined)[]): arr is T[];
    randomStringGen: (length: any) => string;
}
