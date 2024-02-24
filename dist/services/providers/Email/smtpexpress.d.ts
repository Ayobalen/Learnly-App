import { IEmail } from 'src/interfaces';
export declare class MailServiceSandpress {
    private transporter;
    constructor();
    sendEmail(email: IEmail): Promise<void>;
}
