import { ConfigService } from '@nestjs/config';
import { AxiosInstance } from 'axios';
import { Ipay, IResolveAccount } from 'src/interfaces/payment.interface';
export declare class Flutterwave {
    private readonly configService;
    apiUrl: string;
    options: object;
    _client: AxiosInstance;
    constructor(configService: ConfigService);
    genPaymentLink(payload: Ipay): Promise<any>;
    verify(transaction_id: number): Promise<any>;
    verifyByTransactionRef(transaction_ref: string): Promise<any>;
    resolveAccount(payload: IResolveAccount): Promise<any>;
}
