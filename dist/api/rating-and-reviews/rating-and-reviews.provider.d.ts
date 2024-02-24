import { IResponse } from 'src/interfaces';
import { AppointmentService } from '../appointment/appointment.service';
import { LawyerRatingDto, UserRatingDto } from './dtos';
import { LawyerService } from './services/lawyer-rating-and-reviews.service';
import { UserRatingService } from './services/user-rating-and-reviews.service';
export declare class RatingAndReviewProvider {
    private readonly lawyerService;
    private readonly userRatingService;
    private readonly appointmentService;
    constructor(lawyerService: LawyerService, userRatingService: UserRatingService, appointmentService: AppointmentService);
    createLawyerRating(lawyerRating: LawyerRatingDto): Promise<IResponse>;
    getLawyerRating(appointment_id: string): Promise<IResponse>;
    createUserRating(userRating: UserRatingDto): Promise<IResponse>;
    getUserRating(appointment_id: string): Promise<IResponse>;
}
