import { IResponse } from 'src/interfaces';
import { CreateNotificationDto, UpdateNotificationDto } from './dtos';
import { NotificationService } from './notification.service';
export declare class NotificationProvider {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    createNotification(notificationDto: CreateNotificationDto): Promise<IResponse>;
    updateNotification(updateDto: UpdateNotificationDto, notificationId: string): Promise<IResponse>;
    getNotifications(userId: string, queryDto: any): Promise<IResponse>;
    getNotification(userId: string, notifiationId: string): Promise<IResponse>;
    deleteNotification(userId: string, notifiationId: string): Promise<IResponse>;
    deleteNotifications(userId: string): Promise<IResponse>;
}
