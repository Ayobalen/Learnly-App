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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingAndReviewController = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("./dtos");
const rating_and_reviews_provider_1 = require("./rating-and-reviews.provider");
const helpers_1 = require("../../helpers");
const schema_validators_1 = require("./schema-validators");
let RatingAndReviewController = class RatingAndReviewController {
    constructor(ratingAndReview) {
        this.ratingAndReview = ratingAndReview;
    }
    async createLawyerRating(userAuth, data) {
        data.lawyer = userAuth.user;
        const rating = await this.ratingAndReview.createLawyerRating(data);
        return rating;
    }
    async getUserAppointmentRating(appointment_id) {
        const response = await this.ratingAndReview.getUserRating(appointment_id);
        return response;
    }
    async createUserRating(userAuth, data) {
        data.user = userAuth.user;
        const rating = await this.ratingAndReview.createUserRating(data);
        return rating;
    }
    async getLawyerAppointmentRating(appointment_id) {
        const response = await this.ratingAndReview.getLawyerRating(appointment_id);
        return response;
    }
};
__decorate([
    (0, common_1.Post)('lawyers'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, helpers_1.UserAuth)()),
    __param(1, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.lawyerReviews))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.LawyerRatingDto]),
    __metadata("design:returntype", Promise)
], RatingAndReviewController.prototype, "createLawyerRating", null);
__decorate([
    (0, common_1.Get)('users/:appointment_id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Param)('appointment_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RatingAndReviewController.prototype, "getUserAppointmentRating", null);
__decorate([
    (0, common_1.Post)('users'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, helpers_1.UserAuth)()),
    __param(1, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.userReviews))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.UserRatingDto]),
    __metadata("design:returntype", Promise)
], RatingAndReviewController.prototype, "createUserRating", null);
__decorate([
    (0, common_1.Get)('lawyers/:appointment_id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Param)('appointment_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RatingAndReviewController.prototype, "getLawyerAppointmentRating", null);
RatingAndReviewController = __decorate([
    (0, common_1.Controller)('rating/reviews'),
    __metadata("design:paramtypes", [rating_and_reviews_provider_1.RatingAndReviewProvider])
], RatingAndReviewController);
exports.RatingAndReviewController = RatingAndReviewController;
//# sourceMappingURL=rating-and-reviews.controller.js.map