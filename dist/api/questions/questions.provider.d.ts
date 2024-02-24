import { IResponse } from 'src/interfaces';
import { UserService } from '../user/user.service';
import { QuestionService } from './questions.service';
import { QuestionsDto, ReplyDto, WebCommentDto, WebQuestionDto } from './dtos';
export declare class QuestionProvider {
    private readonly questionService;
    private readonly userService;
    constructor(questionService: QuestionService, userService: UserService);
    createQuestion(questionsDto: QuestionsDto): Promise<IResponse>;
    getQuestion(question_id: string): Promise<IResponse>;
    getAllQuestions(query: any): Promise<IResponse>;
    updateQuestion(question_id: string, questionsDto: QuestionsDto): Promise<IResponse>;
    deleteQuestion(question_id: string): Promise<IResponse>;
    likeQuestion(user_id: string, question_id: string): Promise<IResponse>;
    disLikeQuestion(user_id: string, question_id: string): Promise<IResponse>;
    getLawyerReplies(query: any): Promise<IResponse>;
    getUserQuestions(query: any): Promise<IResponse>;
    createReply(replyDto: ReplyDto): Promise<IResponse>;
    getComment(comment_id: string): Promise<IResponse>;
    getAllComments(query: any): Promise<IResponse>;
    deleteComment(comment_id: string): Promise<IResponse>;
    likeComment(comment_id: string): Promise<IResponse>;
    disLikeComment(comment_id: string): Promise<IResponse>;
    getDictionary(): Promise<IResponse>;
    getWord(): Promise<IResponse>;
    createWebQuestion(webQuestionDto: WebQuestionDto): Promise<IResponse>;
    addComment(webCommentDto: WebCommentDto): Promise<IResponse>;
    searchQuestion(searchQuery: string): Promise<IResponse>;
}
