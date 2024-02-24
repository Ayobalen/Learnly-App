import { LawyerRatingDto, UserRatingDto } from './dtos';
import { RatingAndReviewProvider } from './rating-and-reviews.provider';
export declare class RatingAndReviewController {
    private readonly ratingAndReview;
    constructor(ratingAndReview: RatingAndReviewProvider);
    createLawyerRating(userAuth: any, data: LawyerRatingDto): Promise<import("../../interfaces").IResponse>;
    getUserAppointmentRating(appointment_id: string): Promise<import("../../interfaces").IResponse>;
    createUserRating(userAuth: any, data: UserRatingDto): Promise<import("../../interfaces").IResponse>;
    getLawyerAppointmentRating(appointment_id: string): Promise<import("../../interfaces").IResponse>;
}
