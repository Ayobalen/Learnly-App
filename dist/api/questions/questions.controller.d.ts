import { IResponse } from 'src/interfaces';
import { QuestionProvider } from './questions.provider';
import { QuestionsDto, ReplyDto, WebCommentDto, WebQuestionDto } from './dtos';
export declare class QuestionController {
    private readonly questionProvider;
    constructor(questionProvider: QuestionProvider);
    searchQuestion(searchQuery: string): Promise<IResponse>;
    getUserQuestions(userId: string): Promise<IResponse>;
    getAllComments(questionId: string): Promise<IResponse>;
    getWordOfTheDay(): Promise<IResponse>;
    getAllquestions(query: any): Promise<IResponse>;
    getComment(comment_id: string): Promise<IResponse>;
    getQuestion(question_id: string): Promise<IResponse>;
    updateCms(payload: QuestionsDto, question_id: string): Promise<IResponse>;
    createQuestion(userAuth: any, createQuestionDto: QuestionsDto): Promise<IResponse>;
    deleteQuestion(question_id: string): Promise<IResponse>;
    dislikeComment(comment_id: string): Promise<IResponse>;
    createReply(userAuth: any, replyDto: ReplyDto): Promise<IResponse>;
    likeQuestion(userAuth: any, question_id: string): Promise<IResponse>;
    dislikeQuestion(userAuth: any, question_id: string): Promise<IResponse>;
    deleteComment(Comment: string): Promise<IResponse>;
    likeComment(comment_id: string): Promise<IResponse>;
    getLawyerReplies(lawyerId: string): Promise<IResponse>;
    createWebQuestion(webQuestionDto: WebQuestionDto): Promise<IResponse>;
    createWebComment(webCommentDto: WebCommentDto): Promise<IResponse>;
}
