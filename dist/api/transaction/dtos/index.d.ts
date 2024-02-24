export declare class DepositDto {
    user: string;
    amount: number;
    balance: number;
    transaction_type: string;
    transaction_status: string;
}
export declare class WithdrawalDto {
    user: string;
    amount: number;
}
export declare class TransferDto {
    user: string;
    amount: number;
    transfer_to: string;
}
