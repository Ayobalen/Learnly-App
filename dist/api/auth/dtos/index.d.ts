export declare class userSignUpDto {
    email: string;
    first_name: string;
    last_name: string;
    user_name: string;
    phone_number: string;
    account_number: number;
    password: string;
    country: string;
    state: string;
    city: string;
    status: string;
    is_account_verified: boolean;
    user_type: string;
}
export declare class adminSignUpDto {
    email: string;
    first_name: string;
    last_name: string;
    user_name: string;
    phone_number: string;
    password: string;
    country: string;
    state: string;
    city: string;
    status: string;
    is_account_verified: boolean;
    user_type: string;
}
export declare class LoginDto {
    email: string;
    password: string;
}
