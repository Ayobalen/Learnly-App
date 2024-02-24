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
exports.LawyersRatingSchema = exports.LawyersRating = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("../../appointment/schema");
const user_schema_1 = require("../../user/schema/user.schema");
let LawyersRating = class LawyersRating {
};
__decorate([
    (0, mongoose_1.Prop)({
        ref: user_schema_1.User.name,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", user_schema_1.User)
], LawyersRating.prototype, "lawyer", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: schema_1.Appointment.name,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", schema_1.Appointment)
], LawyersRating.prototype, "appointment", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LawyersRating.prototype, "review", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        min: 1,
        max: 5,
        required: true,
    }),
    __metadata("design:type", Number)
], LawyersRating.prototype, "rating", void 0);
LawyersRating = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    })
], LawyersRating);
exports.LawyersRating = LawyersRating;
exports.LawyersRatingSchema = mongoose_1.SchemaFactory.createForClass(LawyersRating);
//# sourceMappingURL=lawyer-rating.schema.js.map