export declare class appointmentDto {
    user: string;
    lawyer: string;
    description: string;
    location: string;
    start_time: string;
    end_time: string;
    status: string;
    consultation_fee: {
        rate: string;
        time: number;
        currency: string;
        amount: string;
    };
    legume_fee: {
        rate?: string;
        amount?: string;
    };
    tax: {
        rate?: string;
        amount?: string;
    };
    total_amount: string;
    lawyer_fee: string;
    reference: string;
    transaction_status: string;
    Channel: string;
    token: string;
}
export declare class paymentStatusDto {
    transaction_status: string;
}
export declare class meeting_linkDto {
    meeting_link: string;
}
export declare class updateAppointmentDto {
    lawyer: string;
    description: string;
    location: string;
    start_time: string;
    end_time: string;
    meeting_link: string;
    consultation_fee: {
        rate: string;
        time: number;
        currency: string;
        amount: string;
    };
    legume_fee: {
        rate: string;
        amount: string;
    };
    tax: {
        rate: string;
        amount: string;
    };
    total_amount: string;
    lawyer_fee: string;
}
