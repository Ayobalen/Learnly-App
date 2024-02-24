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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsSchema = exports.Questions = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const schema_1 = require("../../user/schema");
const constants_1 = require("../../../constants");
let Questions = class Questions {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Questions.prototype, "body", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Questions.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [String],
        enum: Object.values(constants_1.Specialization),
        default: undefined,
    }),
    __metadata("design:type", Array)
], Questions.prototype, "specialization", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: schema_1.User.name,
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Questions.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)([
        {
            type: mongoose_2.default.Schema.Types.ObjectId,
            ref: schema_1.User.name,
        },
    ]),
    __metadata("design:type", Object)
], Questions.prototype, "liked_users", void 0);
__decorate([
    (0, mongoose_1.Prop)([
        {
            type: mongoose_2.default.Schema.Types.ObjectId,
            ref: schema_1.User.name,
        },
    ]),
    __metadata("design:type", Object)
], Questions.prototype, "disliked_users", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Questions.prototype, "likes", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Questions.prototype, "dislikes", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Questions.prototype, "commentCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Object)
], Questions.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        default: 'shown',
    }),
    __metadata("design:type", Object)
], Questions.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: String, required: false }]),
    __metadata("design:type", Array)
], Questions.prototype, "image_url", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: String, required: false }]),
    __metadata("design:type", Array)
], Questions.prototype, "tags", void 0);
Questions = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    })
], Questions);
exports.Questions = Questions;
exports.QuestionsSchema = mongoose_1.SchemaFactory.createForClass(Questions);
exports.QuestionsSchema.index({ body: 'text' });
//# sourceMappingURL=questions.schema.js.map