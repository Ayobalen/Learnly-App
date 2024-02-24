import { IEmail } from 'src/interfaces';
export declare class MailService {
    private transporter;
    constructor();
    private setupTransporter;
    sendEmail(email: IEmail): Promise<void>;
}
