"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingAndReviewsModule = void 0;
const common_1 = require("@nestjs/common");
const rating_and_reviews_provider_1 = require("./rating-and-reviews.provider");
const lawyer_rating_and_reviews_service_1 = require("./services/lawyer-rating-and-reviews.service");
const user_rating_and_reviews_service_1 = require("./services/user-rating-and-reviews.service");
const rating_and_reviews_controller_1 = require("./rating-and-reviews.controller");
const mongoose_1 = require("@nestjs/mongoose");
const schema_1 = require("./schema");
const appointment_service_1 = require("../appointment/appointment.service");
const schema_2 = require("../appointment/schema");
const schema_3 = require("../availability/schema");
const helpers_1 = require("../../helpers");
let ratingAndReviewsModule = class ratingAndReviewsModule {
};
ratingAndReviewsModule = __decorate([
    (0, common_1.Module)({
        providers: [
            rating_and_reviews_provider_1.RatingAndReviewProvider,
            lawyer_rating_and_reviews_service_1.LawyerService,
            appointment_service_1.AppointmentService,
            helpers_1.UtilService,
            user_rating_and_reviews_service_1.UserRatingService,
        ],
        controllers: [rating_and_reviews_controller_1.RatingAndReviewController],
        exports: [lawyer_rating_and_reviews_service_1.LawyerService, user_rating_and_reviews_service_1.UserRatingService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_1.LawyersRating.name,
                    schema: schema_1.LawyersRatingSchema,
                },
                {
                    name: schema_1.UsersRating.name,
                    schema: schema_1.UsersRatingSchema,
                },
                {
                    name: schema_2.Appointment.name,
                    schema: schema_2.AppointmentSchema,
                },
                {
                    name: schema_3.Availability.name,
                    schema: schema_3.AvailabilitySchema,
                },
            ]),
        ],
    })
], ratingAndReviewsModule);
exports.ratingAndReviewsModule = ratingAndReviewsModule;
//# sourceMappingURL=rating-and-reviews.module.js.map