export class DepositDto {
  user: string
  amount: number;
  balance: number;
  transaction_type: string;
  transaction_status: string
}

export class WithdrawalDto {
  user: string;
  amount: number;
  }

export class TransferDto {
  user: string;
  amount: number;
  transfer_to: string
 }
  
