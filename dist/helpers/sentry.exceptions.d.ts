export declare class SentryException extends Error {
    readonly err: Error;
    name: string;
    constructor(err: Error, message?: string, name?: string);
}
