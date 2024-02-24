import { UserStatProvider } from './user-stats.provider';
export declare class UserStatController {
    private readonly userStatProvider;
    constructor(userStatProvider: UserStatProvider);
    getUserStats(): Promise<{
        totalUsers: number;
        usersAddedLastMonth: number;
        percentageChange: string | number;
    }>;
    getActiveUserStats(): Promise<{
        totalActiveUsers: number;
        activeUsersAddedLastMonth: number;
        percentageChange: string | number;
    }>;
    getNewUserStats(): Promise<{
        usersCreatedThisMonth: number;
        usersCreatedLastMonth: number;
        percentageChange: string | number;
    }>;
    getLocationStats(): Promise<any[]>;
    getUsersAppointment(): Promise<any[]>;
    totalAmount(): Promise<{
        thisMonth: number;
        previousMonth: number;
        percentageChange: number;
    }>;
    specilisation(): Promise<{
        [key: string]: number;
    }>;
}
