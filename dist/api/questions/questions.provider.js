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
exports.QuestionProvider = void 0;
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
const user_service_1 = require("../user/user.service");
const questions_service_1 = require("./questions.service");
const constants_1 = require("../../constants");
let QuestionProvider = class QuestionProvider {
    constructor(questionService, userService) {
        this.questionService = questionService;
        this.userService = userService;
    }
    async createQuestion(questionsDto) {
        const data = await this.questionService.createQuestion(questionsDto);
        return {
            status: 'success',
            message: 'Question submitted',
            data: data,
        };
    }
    async getQuestion(question_id) {
        const data = await this.questionService.getQuestion({ _id: question_id });
        if ((0, lodash_1.isEmpty)(data))
            throw new common_1.NotFoundException(`Question ${question_id} not found`);
        return {
            status: 'success',
            message: 'Question retrieved successfully',
            data,
        };
    }
    async getAllQuestions(query) {
        let _query = Object.assign({}, query);
        const paginationQuery = {};
        if (_query.page) {
            paginationQuery.page = Number(_query.page);
            delete _query.page;
        }
        if (_query.limit) {
            paginationQuery.limit = Number(_query.limit);
            delete _query.limit;
        }
        if (_query.search) {
            _query = { tags: { $regex: _query.search, $options: 'i' } };
        }
        if (_query.user) {
            _query = { author: _query.user };
        }
        if (_query.start_date && _query.end_date) {
            _query = {
                createdAt: { $gte: new Date(_query.start_date), $lt: new Date(_query.end_date) },
            };
        }
        const { count, totalPages, data } = await this.questionService.getAllQuestion(_query, paginationQuery);
        return {
            status: 'success',
            message: 'Questions successfully retrieved',
            data: data,
            meta: {
                count,
                totalPages,
            },
        };
    }
    async updateQuestion(question_id, questionsDto) {
        const QuestionExist = await this.questionService.getQuestion({ _id: question_id });
        if ((0, lodash_1.isEmpty)(QuestionExist)) {
            throw new common_1.NotFoundException(`Question ${question_id} not found`);
        }
        const data = await this.questionService.updateQuestion({ _id: question_id }, questionsDto, {
            new: true,
        });
        return {
            status: 'success',
            message: 'Question Updated successfully',
            data,
        };
    }
    async deleteQuestion(question_id) {
        const questionExist = await this.questionService.getQuestion({ _id: question_id });
        if ((0, lodash_1.isEmpty)(questionExist)) {
            throw new common_1.NotFoundException(`Question ${question_id} not found`);
        }
        await this.questionService.deleteQuestion({ _id: question_id });
        return {
            status: 'success',
            message: 'Question deleted successfully',
            data: [],
        };
    }
    async likeQuestion(user_id, question_id) {
        const getQuestions = await this.questionService.getQuestion({
            _id: question_id,
            is_deleted: false,
        });
        if ((0, lodash_1.isEmpty)(getQuestions))
            throw new common_1.NotFoundException(`Question not found`);
        if (!(0, lodash_1.isEmpty)(getQuestions.disliked_users)) {
            if (getQuestions.disliked_users.includes(user_id))
                throw new common_1.NotFoundException(`You can't like question you already disliked`);
        }
        const like = getQuestions.liked_users;
        let likeCount;
        if (!(0, lodash_1.isEmpty)(like)) {
            if (like.includes(user_id)) {
                like.pop(user_id);
                likeCount = getQuestions.likes - 1;
                const updateQuestions = await this.questionService.updateQuestion({ _id: getQuestions._id }, { likes: likeCount, liked_users: like }, { new: true });
                return {
                    status: 'success',
                    message: 'like removed successfully',
                    data: updateQuestions,
                };
            }
        }
        like.push(user_id);
        likeCount = getQuestions.likes + 1;
        const updateQuestions = await this.questionService.updateQuestion({ _id: getQuestions._id }, { likes: likeCount, liked_users: like }, { new: true });
        return {
            status: 'success',
            message: 'Question liked successfully',
            data: updateQuestions,
        };
    }
    async disLikeQuestion(user_id, question_id) {
        const getQuestions = await this.questionService.getQuestion({
            _id: question_id,
            is_deleted: false,
        });
        if ((0, lodash_1.isEmpty)(getQuestions))
            throw new common_1.NotFoundException(`Question not found`);
        if (!(0, lodash_1.isEmpty)(getQuestions.liked_users)) {
            if (getQuestions.liked_users.includes(user_id))
                throw new common_1.NotFoundException(`You can't dislike question you already liked`);
        }
        const dislike = getQuestions.disliked_users;
        let dislikeCount;
        if (!(0, lodash_1.isEmpty)(dislike)) {
            if (dislike.includes(user_id)) {
                dislike.pop(user_id);
                dislikeCount = getQuestions.dislikes - 1;
                const updateQuestions = await this.questionService.updateQuestion({ _id: getQuestions._id }, { dislikes: dislikeCount, disliked_users: dislike }, { new: true });
                return {
                    status: 'success',
                    message: 'Dislike removed successfully',
                    data: updateQuestions,
                };
            }
        }
        dislike.push(user_id);
        dislikeCount = getQuestions.dislikes + 1;
        const updateQuestions = await this.questionService.updateQuestion({ _id: getQuestions._id }, { dislikes: dislikeCount, disliked_users: dislike }, { new: true });
        return {
            status: 'success',
            message: 'Disliked successfully',
            data: updateQuestions,
        };
    }
    async getLawyerReplies(query) {
        const _query = Object.assign({}, query);
        const paginationQuery = {};
        if (_query.page) {
            paginationQuery.page = Number(_query.page);
            delete _query.page;
        }
        if (_query.limit) {
            paginationQuery.limit = Number(_query.limit);
            delete _query.limit;
        }
        if (_query.start_date && _query.end_date) {
            _query.createdAt = {
                $gte: new Date(_query.start_date),
                $lt: new Date(_query.end_date),
            };
            delete _query.start_date;
            delete _query.end_date;
        }
        const lawyerId = _query.user;
        delete _query.user;
        const { data, count, totalPages } = await this.questionService.getAllLawyerReplies(lawyerId, Object.assign(Object.assign({}, _query), paginationQuery));
        return {
            status: 'success',
            message: "All lawyer's replies successfully retrieved",
            data,
            meta: {
                count,
                totalPages,
            },
        };
    }
    async getUserQuestions(query) {
        const _query = Object.assign({}, query);
        const paginationQuery = {};
        if (_query.page) {
            paginationQuery.page = Number(_query.page);
            delete _query.page;
        }
        if (_query.limit) {
            paginationQuery.limit = Number(_query.limit);
            delete _query.limit;
        }
        if (_query.start_date && _query.end_date) {
            _query.createdAt = {
                $gte: new Date(_query.start_date),
                $lt: new Date(_query.end_date),
            };
            delete _query.start_date;
            delete _query.end_date;
        }
        const userId = _query.user;
        delete _query.user;
        const { data, count, totalPages } = await this.questionService.getAllUserQuestions(userId, Object.assign(Object.assign({}, _query), paginationQuery));
        return {
            status: 'success',
            message: "All user's questions successfully retrieved",
            data,
            meta: {
                count,
                totalPages,
            },
        };
    }
    async createReply(replyDto) {
        const question = await this.questionService.getQuestion({ _id: replyDto.question });
        if (!question) {
            throw new common_1.NotFoundException('Question with this id does not exist');
        }
        const reply = await this.questionService.createReply(replyDto);
        question.commentCount += 1;
        await question.save();
        return {
            status: 'success',
            message: 'Reply sent',
            data: reply,
        };
    }
    async getComment(comment_id) {
        const data = await this.questionService.getComment({ _id: comment_id });
        if ((0, lodash_1.isEmpty)(data))
            throw new common_1.NotFoundException(`Comment ${comment_id} not found`);
        return {
            status: 'success',
            message: 'Comment retrieved successfully',
            data,
        };
    }
    async getAllComments(query) {
        const _query = Object.assign({}, query);
        const questionId = _query.question;
        delete _query.question;
        const { data } = await this.questionService.getAllComments(questionId);
        return {
            status: 'success',
            message: 'All comments retrieved successfully',
            data: data,
        };
    }
    async deleteComment(comment_id) {
        const commentExist = await this.questionService.getComment({ _id: comment_id });
        if ((0, lodash_1.isEmpty)(commentExist)) {
            throw new common_1.NotFoundException(`Cms ${comment_id} not found`);
        }
        const data = await this.questionService.deleteComment({ _id: comment_id });
        return {
            status: 'success',
            message: 'Comment deleted successfully',
            data: [],
        };
    }
    async likeComment(comment_id) {
        const data = await this.questionService.likeComment({ _id: comment_id });
        if ((0, lodash_1.isEmpty)(data))
            throw new common_1.NotFoundException(`Comment ${comment_id} not found`);
        return {
            status: 'success',
            message: 'Liked successfully',
            data: [],
        };
    }
    async disLikeComment(comment_id) {
        const data = await this.questionService.dislikeComment({ _id: comment_id });
        if ((0, lodash_1.isEmpty)(data))
            throw new common_1.NotFoundException(`Comment ${comment_id} not found`);
        return {
            status: 'success',
            message: 'Disliked successfully',
            data: [],
        };
    }
    async getDictionary() {
        const dictionary = Object.values(constants_1.Word_of_the_day);
        return {
            status: 'success',
            message: 'Dictionary retrieved successfully',
            data: dictionary,
        };
    }
    async getWord() {
        const dailyWord = Object.values(constants_1.Word_of_the_day);
        const randomWord = dailyWord[Math.floor(Math.random() * dailyWord.length)];
        return {
            status: 'success',
            message: "Today's word",
            data: randomWord,
        };
    }
    async createWebQuestion(webQuestionDto) {
        const data = await this.questionService.ask(webQuestionDto);
        return {
            status: 'success',
            message: 'Question submitted',
            data: data,
        };
    }
    async addComment(webCommentDto) {
        const data = await this.questionService.addComment(webCommentDto);
        return {
            status: 'success',
            message: 'Comment sent',
            data: data,
        };
    }
    async searchQuestion(searchQuery) {
        const search = await this.questionService.searchQuestions(searchQuery);
        return {
            status: 'success',
            message: 'Question and answers related retrieved successfully',
            data: search,
        };
    }
};
QuestionProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [questions_service_1.QuestionService,
        user_service_1.UserService])
], QuestionProvider);
exports.QuestionProvider = QuestionProvider;
//# sourceMappingURL=questions.provider.js.map