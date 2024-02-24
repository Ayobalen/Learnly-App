import { CreateNotificationDto, UpdateNotificationDto } from './dtos';
import { NotificationProvider } from './notification.provider';
import { IResponse } from 'src/interfaces';
export declare class NotificationController {
    private readonly notificationProvider;
    constructor(notificationProvider: NotificationProvider);
    createNotification(userAuth: any, notificationDto: CreateNotificationDto): Promise<IResponse>;
    updateNotification(updateDto: UpdateNotificationDto, notificationId: string): Promise<IResponse>;
    getNotifications(userId: string, queryDto: any): Promise<IResponse>;
    getNotification(notifiationId: string, userId: string): Promise<IResponse>;
    deleteNotification(notifiationId: string, userId: string): Promise<IResponse>;
    deleteNotifications(userId: string): Promise<IResponse>;
}
