import { UserStatService } from './user-stats.service';
export declare class UserStatProvider {
    private readonly userStatService;
    constructor(userStatService: UserStatService);
    getUserPercentage(): Promise<{
        totalUsers: number;
        usersAddedLastMonth: number;
        percentageChange: string | number;
    }>;
    getActiveUserPercentage(): Promise<{
        totalActiveUsers: number;
        activeUsersAddedLastMonth: number;
        percentageChange: string | number;
    }>;
    getNewUsersPercentage(): Promise<{
        usersCreatedThisMonth: number;
        usersCreatedLastMonth: number;
        percentageChange: string | number;
    }>;
    getUsersLocationStats(): Promise<any[]>;
    getUsersWithAppointment(): Promise<any[]>;
    getTotalAmount(): Promise<{
        thisMonth: number;
        previousMonth: number;
        percentageChange: number;
    }>;
    getSpecialisationPercentage(): Promise<{
        [key: string]: number;
    }>;
}
