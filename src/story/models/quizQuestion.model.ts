import { QuizOption } from './quizOption.model';

export interface QuizQuestion {
    questionId: number;
    questionTopic: string;
    questionContent: string;
    quizOptions: QuizOption[];
    quizAnswer: string;
    selectedQuizOption: string;
}