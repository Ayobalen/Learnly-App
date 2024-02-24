export declare class AddTransactionDto {
    status?: string;
    order: string;
    user: string;
    store: string;
    discount: number;
    amount: number;
    total_price: number;
    delivery_fee: number;
    payment_method: string;
    transaction_reference: string;
    reason?: string;
    meta?: any;
    items: any;
}
export type UpdateTransactionDto = Partial<AddTransactionDto>;
