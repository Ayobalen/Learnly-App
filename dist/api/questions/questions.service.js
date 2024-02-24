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
exports.QuestionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("./schema");
const helpers_1 = require("../../helpers");
const lodash_1 = require("lodash");
const webQuestion_schema_1 = require("./schema/webQuestion.schema");
let QuestionService = class QuestionService {
    constructor(questionsModel, commentModel, webQuestion, webComment, utilService) {
        this.questionsModel = questionsModel;
        this.commentModel = commentModel;
        this.webQuestion = webQuestion;
        this.webComment = webComment;
        this.utilService = utilService;
    }
    async getAllQuestion(filterQuery, paginationQuery) {
        const count = await this.questionsModel.countDocuments(filterQuery);
        const { limit, offset, totalPages } = this.utilService.getPaginationData(paginationQuery, count);
        const data = (0, lodash_1.isEmpty)(paginationQuery)
            ? await this.questionsModel.find(filterQuery).populate('user').sort({ createdAt: -1 })
            : await this.questionsModel
                .find(filterQuery)
                .populate('user')
                .limit(limit)
                .skip(offset)
                .sort({ createdAt: -1 });
        return {
            data,
            count,
            totalPages,
        };
    }
    async createQuestion(questionsDto) {
        const data = await this.questionsModel.create(questionsDto);
        await data.populate('user');
        return data;
    }
    async getAllComments(questionId) {
        const filterQuery = { question: questionId };
        const comments = await this.commentModel.find(filterQuery);
        const data = await this.commentModel
            .find(filterQuery)
            .populate('user')
            .populate('question')
            .sort({ createdAt: -1 });
        await this.commentModel.find(filterQuery).populate('user').populate('question');
        return {
            data,
        };
    }
    async getQuestion(filterQuery) {
        const data = await this.questionsModel.findOne(filterQuery).populate('user');
        return data;
    }
    async getAllLawyerReplies(lawyerId, paginationQuery) {
        const filterQuery = { user: lawyerId };
        const count = await this.commentModel.countDocuments(filterQuery);
        const { limit, offset, totalPages } = this.utilService.getPaginationData(paginationQuery, count);
        const data = (0, lodash_1.isEmpty)(paginationQuery)
            ? await this.commentModel
                .find(filterQuery)
                .populate('user')
                .populate('question')
                .sort({ createdAt: -1 })
            : await this.commentModel
                .find(filterQuery)
                .populate('user')
                .populate('question')
                .skip(offset)
                .sort({ createdAt: -1 });
        return {
            data,
            count,
            totalPages,
        };
    }
    async getAllUserQuestions(userId, paginationQuery) {
        const filterQuery = { user: userId };
        const count = await this.questionsModel.countDocuments(filterQuery);
        const { limit, offset, totalPages } = this.utilService.getPaginationData(paginationQuery, count);
        const data = (0, lodash_1.isEmpty)(paginationQuery)
            ? await this.questionsModel.find(filterQuery).populate('user').sort({ createdAt: -1 })
            : await this.questionsModel
                .find(filterQuery)
                .populate('user')
                .skip(offset)
                .sort({ createdAt: -1 });
        return {
            data,
            count,
            totalPages,
        };
    }
    async updateQuestion(filterQuery, updateQuery, options) {
        const request = await this.questionsModel.findOneAndUpdate(filterQuery, updateQuery, options);
        return request;
    }
    async deleteQuestion(filterQuery) {
        const response = await this.questionsModel.findOneAndDelete(filterQuery);
        return response;
    }
    async likeQuestion(filterQuery) {
        const question = await this.questionsModel.findOne(filterQuery);
        question.likes += 1;
        return question.save();
    }
    async dislikeQuestion(filterQuery) {
        const question = await this.questionsModel.findOne(filterQuery);
        question.dislikes += 1;
        question.save();
        return question;
    }
    async createReply(replyDto) {
        const data = await this.commentModel.create(replyDto);
        return data;
    }
    async getComment(filterQuery) {
        const data = await this.commentModel.findOne(filterQuery).populate('user').populate('question');
        return data;
    }
    async deleteComment(filterQuery) {
        const response = await this.commentModel.findOneAndDelete(filterQuery);
        return response;
    }
    async likeComment(filterQuery) {
        const comment = await this.commentModel.findOne(filterQuery);
        comment.likes += 1;
        return comment.save();
    }
    async dislikeComment(filterQuery) {
        const comment = await this.commentModel.findOne(filterQuery);
        comment.dislikes += 1;
        return comment.save();
    }
    async ask(webQuestion) {
        const askQuestion = await this.webQuestion.create(webQuestion);
        await askQuestion.save();
    }
    async addComment(webComment) {
        const addComment = await this.webComment.create(webComment);
        await addComment.save();
    }
    async searchQuestions(searchQuery) {
        const results = await this.questionsModel.aggregate([
            {
                $match: {
                    $text: {
                        $search: searchQuery
                    }
                }
            },
            {
                $sort: {
                    score: {
                        $meta: 'textScore'
                    }
                }
            },
            {
                $lookup: {
                    from: 'comments',
                    localField: '_id',
                    foreignField: 'question',
                    as: 'comments'
                }
            }
        ]);
        return results;
    }
};
QuestionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Questions.name)),
    __param(1, (0, mongoose_1.InjectModel)(schema_1.Comment.name)),
    __param(2, (0, mongoose_1.InjectModel)(webQuestion_schema_1.webQuestion.name)),
    __param(3, (0, mongoose_1.InjectModel)(schema_1.webComment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        helpers_1.UtilService])
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=questions.service.js.map