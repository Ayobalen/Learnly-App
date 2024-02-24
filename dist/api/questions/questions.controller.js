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
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../helpers");
const helpers_2 = require("../../helpers");
const questions_provider_1 = require("./questions.provider");
const dtos_1 = require("./dtos");
const schema_validators_1 = require("./schema-validators");
let QuestionController = class QuestionController {
    constructor(questionProvider) {
        this.questionProvider = questionProvider;
    }
    async searchQuestion(searchQuery) {
        const response = await this.questionProvider.searchQuestion(searchQuery);
        return response;
    }
    async getUserQuestions(userId) {
        const response = await this.questionProvider.getUserQuestions({ user: userId });
        return response;
    }
    async getAllComments(questionId) {
        const data = await this.questionProvider.getAllComments({ question: questionId });
        return data;
    }
    async getWordOfTheDay() {
        const word = await this.questionProvider.getWord();
        return word;
    }
    async getAllquestions(query) {
        const data = await this.questionProvider.getAllQuestions(query);
        return data;
    }
    async getComment(comment_id) {
        return this.questionProvider.getComment(comment_id);
    }
    async getQuestion(question_id) {
        return this.questionProvider.getQuestion(question_id);
    }
    async updateCms(payload, question_id) {
        return this.questionProvider.updateQuestion(question_id, payload);
    }
    async createQuestion(userAuth, createQuestionDto) {
        createQuestionDto.user = userAuth.user;
        return this.questionProvider.createQuestion(createQuestionDto);
    }
    async deleteQuestion(question_id) {
        return this.questionProvider.deleteQuestion(question_id);
    }
    async dislikeComment(comment_id) {
        return this.questionProvider.disLikeComment(comment_id);
    }
    async createReply(userAuth, replyDto) {
        replyDto.user = userAuth.user;
        return this.questionProvider.createReply(replyDto);
    }
    async likeQuestion(userAuth, question_id) {
        return this.questionProvider.likeQuestion(userAuth.user, question_id);
    }
    async dislikeQuestion(userAuth, question_id) {
        return this.questionProvider.disLikeQuestion(userAuth.user, question_id);
    }
    async deleteComment(Comment) {
        return this.questionProvider.deleteComment(Comment);
    }
    async likeComment(comment_id) {
        return this.questionProvider.likeComment(comment_id);
    }
    async getLawyerReplies(lawyerId) {
        const response = await this.questionProvider.getLawyerReplies({ user: lawyerId });
        return response;
    }
    async createWebQuestion(webQuestionDto) {
        return this.questionProvider.createWebQuestion(webQuestionDto);
    }
    async createWebComment(webCommentDto) {
        return this.questionProvider.addComment(webCommentDto);
    }
};
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "searchQuestion", null);
__decorate([
    (0, common_1.Get)('users/questions/:user_id'),
    (0, common_1.UseGuards)(helpers_2.JwtGuard),
    __param(0, (0, common_1.Param)('user_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getUserQuestions", null);
__decorate([
    (0, common_1.Get)('/comments/:question_id'),
    (0, common_1.UseGuards)(helpers_2.JwtGuard),
    __param(0, (0, common_1.Param)('question_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getAllComments", null);
__decorate([
    (0, common_1.Get)('/random-word'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getWordOfTheDay", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, common_1.UseGuards)(helpers_2.JwtGuard),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getAllquestions", null);
__decorate([
    (0, common_1.Get)('/comments/:comment_id'),
    (0, common_1.UseGuards)(helpers_2.JwtGuard),
    __param(0, (0, common_1.Param)('comment_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getComment", null);
__decorate([
    (0, common_1.Get)(':question_id'),
    (0, common_1.UseGuards)(helpers_2.JwtGuard),
    __param(0, (0, common_1.Param)('question_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getQuestion", null);
__decorate([
    (0, common_1.Put)(':question_id'),
    (0, common_1.UseGuards)(helpers_2.JwtGuard),
    __param(0, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.QuestionSchema))),
    __param(1, (0, common_1.Param)('question_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.QuestionsDto, String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "updateCms", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)(helpers_2.JwtGuard),
    __param(0, (0, helpers_2.UserAuth)()),
    __param(1, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.QuestionSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.QuestionsDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "createQuestion", null);
__decorate([
    (0, common_1.Delete)(':question_id'),
    (0, common_1.UseGuards)(helpers_2.JwtGuard),
    __param(0, (0, common_1.Param)('question_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "deleteQuestion", null);
__decorate([
    (0, common_1.Post)(':comment_id/dislike'),
    (0, common_1.UseGuards)(helpers_2.JwtGuard),
    __param(0, (0, common_1.Param)('comment_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "dislikeComment", null);
__decorate([
    (0, common_1.Post)('/comment'),
    (0, common_1.UseGuards)(helpers_2.JwtGuard),
    __param(0, (0, helpers_2.UserAuth)()),
    __param(1, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.CommentSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.ReplyDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "createReply", null);
__decorate([
    (0, common_1.Post)('like/:question_id'),
    (0, common_1.UseGuards)(helpers_2.JwtGuard),
    __param(0, (0, helpers_2.UserAuth)()),
    __param(1, (0, common_1.Param)('question_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "likeQuestion", null);
__decorate([
    (0, common_1.Post)('/dislike/:question_id'),
    (0, common_1.UseGuards)(helpers_2.JwtGuard),
    __param(0, (0, helpers_2.UserAuth)()),
    __param(1, (0, common_1.Param)('question_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "dislikeQuestion", null);
__decorate([
    (0, common_1.Delete)('/comments/:comment_id'),
    (0, common_1.UseGuards)(helpers_2.JwtGuard),
    __param(0, (0, common_1.Param)('comment_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "deleteComment", null);
__decorate([
    (0, common_1.Post)(':comment_id/like'),
    (0, common_1.UseGuards)(helpers_2.JwtGuard),
    __param(0, (0, common_1.Param)('comment_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "likeComment", null);
__decorate([
    (0, common_1.Get)('lawyers/replies/:lawyer_id'),
    (0, common_1.UseGuards)(helpers_2.JwtGuard),
    __param(0, (0, common_1.Param)('lawyer_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getLawyerReplies", null);
__decorate([
    (0, common_1.Post)('ask_question'),
    __param(0, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.WebQuestionSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.WebQuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "createWebQuestion", null);
__decorate([
    (0, common_1.Post)('add-comment'),
    __param(0, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validators_1.WebCommentSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.WebCommentDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "createWebComment", null);
QuestionController = __decorate([
    (0, common_1.Controller)('question'),
    __metadata("design:paramtypes", [questions_provider_1.QuestionProvider])
], QuestionController);
exports.QuestionController = QuestionController;
//# sourceMappingURL=questions.controller.js.map