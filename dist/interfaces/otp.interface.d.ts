export interface IEmail {
    to: string;
    subject: string;
    html?: string;
}
export interface SmsMeta {
    sms_id?: string;
    account_sid?: string;
    delivery_status?: string;
}
export interface EmailMeta {
    email_id?: string;
    subject?: string;
    text?: string;
    html?: string;
}
