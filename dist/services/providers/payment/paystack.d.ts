import { ConfigService } from '@nestjs/config';
import { AxiosInstance } from 'axios';
import { IResolveAccount } from 'src/interfaces/payment.interface';
export declare class Paystack {
    private readonly configService;
    apiUrl: string;
    options: object;
    _client: AxiosInstance;
    constructor(configService: ConfigService);
    genPaymentLink(payload: any): Promise<{
        data: {
            link: string;
        };
    }>;
    createAccount(code: any): Promise<any>;
    createCustomer(data: any): Promise<any>;
    verify(transaction_id: number): Promise<any>;
    verifyByTransactionRef(transaction_ref: string): Promise<any>;
    resolveAccount(payload: IResolveAccount): Promise<any>;
    refund(data: any): Promise<any>;
}
