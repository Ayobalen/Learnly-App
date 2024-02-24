import { Model } from 'mongoose';
import { UserDocument } from '../user/schema/user.schema';
import { AppointmentDocument } from '../appointment/schema';
export declare class UserStatService {
    private readonly userModel;
    private readonly appointmentModel;
    constructor(userModel: Model<UserDocument>, appointmentModel: Model<AppointmentDocument>);
    getTotalUsers(): Promise<number>;
    getUsersAddedLastMonth(): Promise<number>;
    getActiveUsersCount(): Promise<number>;
    getActiveUsersAddedLastMonth(): Promise<number>;
    getUsersCreatedThisMonth(): Promise<number>;
    getUsersCreatedLastMonth(): Promise<number>;
    getUsersCountByCountryAndState(): Promise<any[]>;
    findAllUsersWithAppointments(): Promise<any[]>;
    getTotalAmountSpentAndPercentageChange(): Promise<{
        thisMonth: number;
        previousMonth: number;
        percentageChange: number;
    }>;
    getLawyerSpecializationPercentages(): Promise<{
        [key: string]: number;
    }>;
}
