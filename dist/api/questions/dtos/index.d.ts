export declare class QuestionsDto {
    user: string;
    body: string;
    likes: number;
    dislikes: number;
    commentCount: number;
    image_url: string[];
    tags: string[];
    specialization: string[];
    location: string;
}
export declare class ReplyDto {
    question: string;
    user: string;
    body: string;
    likes: number;
    dislikes: number;
}
export declare class WebQuestionDto {
    question: string;
}
export declare class WebCommentDto {
    comment: string;
}
