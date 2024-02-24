"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingAndReviewProvider = void 0;
const appointment_service_1 = require("../appointment/appointment.service");
const lawyer_rating_and_reviews_service_1 = require("./services/lawyer-rating-and-reviews.service");
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
const user_rating_and_reviews_service_1 = require("./services/user-rating-and-reviews.service");
let RatingAndReviewProvider = class RatingAndReviewProvider {
    constructor(lawyerService, userRatingService, appointmentService) {
        this.lawyerService = lawyerService;
        this.userRatingService = userRatingService;
        this.appointmentService = appointmentService;
    }
    async createLawyerRating(lawyerRating) {
        const appointment = await this.appointmentService.getAppointment({
            _id: lawyerRating.appointment,
        });
        if (!appointment) {
            throw new common_1.NotFoundException('Appointment with this ID does not exist');
        }
        const review = await this.lawyerService.createRating(lawyerRating);
        return {
            status: 'success',
            message: 'Review submitted',
            data: review,
        };
    }
    async getLawyerRating(appointment_id) {
        const data = await this.lawyerService.getRatingAppointment(appointment_id);
        if ((0, lodash_1.isEmpty)(data))
            throw new common_1.NotFoundException(`Appointment ${appointment_id} not found`);
        return {
            status: 'success',
            message: 'Lawyer rating of the appointment retrieved successfully',
            data,
        };
    }
    async createUserRating(userRating) {
        const appointment = await this.appointmentService.getAppointment({
            _id: userRating.appointment,
        });
        if (!appointment) {
            throw new common_1.NotFoundException('Appointment with this ID does not exist');
        }
        const review = await this.userRatingService.createRating(userRating);
        return {
            status: 'success',
            message: 'Review submitted',
            data: review,
        };
    }
    async getUserRating(appointment_id) {
        const data = await this.userRatingService.getRatingAppointment(appointment_id);
        if ((0, lodash_1.isEmpty)(data))
            throw new common_1.NotFoundException(`Appointment ${appointment_id} not found`);
        return {
            status: 'success',
            message: 'User rating of the appointment retrieved successfully',
            data,
        };
    }
};
RatingAndReviewProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [lawyer_rating_and_reviews_service_1.LawyerService,
        user_rating_and_reviews_service_1.UserRatingService,
        appointment_service_1.AppointmentService])
], RatingAndReviewProvider);
exports.RatingAndReviewProvider = RatingAndReviewProvider;
//# sourceMappingURL=rating-and-reviews.provider.js.map