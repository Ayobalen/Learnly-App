"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const questions_service_1 = require("./questions.service");
const schema_1 = require("./schema");
const auth_module_1 = require("../auth/auth.module");
const user_module_1 = require("../user/user.module");
const questions_provider_1 = require("./questions.provider");
const helpers_1 = require("../../helpers");
const questions_controller_1 = require("./questions.controller");
const webComment_schema_1 = require("./schema/webComment.schema");
let QuestionModule = class QuestionModule {
};
QuestionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_1.Questions.name,
                    schema: schema_1.QuestionsSchema,
                },
                {
                    name: schema_1.Comment.name,
                    schema: schema_1.CommentSchema,
                },
                {
                    name: schema_1.webQuestion.name,
                    schema: schema_1.webQuestionSchema
                },
                {
                    name: webComment_schema_1.webComment.name,
                    schema: webComment_schema_1.webCommentSchema
                }
            ]),
        ],
        providers: [questions_service_1.QuestionService, questions_provider_1.QuestionProvider, helpers_1.UtilService],
        controllers: [questions_controller_1.QuestionController],
        exports: [questions_provider_1.QuestionProvider, questions_service_1.QuestionService],
    })
], QuestionModule);
exports.QuestionModule = QuestionModule;
//# sourceMappingURL=questions.module.js.map