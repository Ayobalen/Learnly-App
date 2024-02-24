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
exports.CommentSchema = exports.Comment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const schema_1 = require("../../user/schema");
const questions_schema_1 = require("./questions.schema");
let Comment = class Comment {
};
__decorate([
    (0, mongoose_1.Prop)({
        ref: questions_schema_1.Questions.name,
        type: mongoose_2.default.Schema.Types.ObjectId,
    }),
    __metadata("design:type", questions_schema_1.Questions)
], Comment.prototype, "question", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Comment.prototype, "body", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        required: true,
        ref: schema_1.User.name,
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Comment.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Comment.prototype, "likes", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Comment.prototype, "dislikes", void 0);
Comment = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    })
], Comment);
exports.Comment = Comment;
exports.CommentSchema = mongoose_1.SchemaFactory.createForClass(Comment);
//# sourceMappingURL=comments.js.map