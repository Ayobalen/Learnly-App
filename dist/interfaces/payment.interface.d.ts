export interface Ipay {
    tx_ref: string;
    amount: number;
    currency: string;
    redirect_url: string;
    payment_options: string;
    customer: {
        full_name: string;
        id: string;
        email: string;
        phone_number: string;
    };
    meta?: {
        title?: string;
        source?: string;
    };
}
export interface IResolveAccount {
    account_bank: string;
    account_number: string;
}
