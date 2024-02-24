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
exports.LawyerService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const schema_1 = require("../schema");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
let LawyerService = class LawyerService {
    constructor(lawyerRating) {
        this.lawyerRating = lawyerRating;
    }
    async createRating(data) {
        const rating = await this.lawyerRating.create(data);
        await rating.populate('appointment lawyer');
        return rating;
    }
    async getRatingAppointment(appointment_id) {
        const filterQuery = { appointment: appointment_id };
        const data = await this.lawyerRating
            .findOne(filterQuery)
            .populate('lawyer')
            .populate('appointment');
        return data;
    }
};
LawyerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.LawyersRating.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LawyerService);
exports.LawyerService = LawyerService;
//# sourceMappingURL=lawyer-rating-and-reviews.service.js.map