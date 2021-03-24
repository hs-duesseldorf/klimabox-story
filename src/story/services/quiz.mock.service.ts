import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuizQuestion } from '../models/quizQuestion.model';

@Injectable({
    providedIn: 'root'
  })

export class QuizService {
    constructor() { }

    quizQuestion!: QuizQuestion;
    correctAnswer!: boolean; 

    quizQuestions: QuizQuestion[] = [
        {
            questionId: 1,
            questionTopic: 'mobilitaet',
            questionContent: 'Wie lange steht ein Auto in Deutschland am Tag ungenutzt auf seinem Parkplatz',
            quizOptions: [
                { optionNumber: '1', optionContent: '18 Stunden' },
                { optionNumber: '2', optionContent: '23 Stunden' },
                { optionNumber: '3', optionContent: '12 Stunden' },
                { optionNumber: '4', optionContent: '21 Stunden' }
            ],
            quizAnswer: '2',
            selectedQuizOption: ''
        },
        {
            questionId: 2,
            questionTopic: 'konsum',
            questionContent: 'Koennte hier eine zweite Frage stehen?',
            quizOptions: [
                { optionNumber: '1', optionContent: 'Antwort 1' },
                { optionNumber: '2', optionContent: 'Antwort 2' },
                { optionNumber: '3', optionContent: 'Antwort 3' },
                { optionNumber: '4', optionContent: 'Antwort 4' }
            ],
            quizAnswer: '3',
            selectedQuizOption: ''
        }
    ];

    // checkAnswer(): boolean {
    //     if (this.isCorrectAnswer()) {
    //         return this.correctAnswer = true;
    //     }
    //     else {
    //         return this.correctAnswer = false;
    //     }
    // }

    // isCorrectAnswer(): boolean {
    //     return this.quizQuestion.selectedQuizOption === this.quizQuestion.quizAnswer;
    // } 

    checkAnswer(selectedAnswer: string): boolean {
        if (selectedAnswer === this.quizQuestions[0].quizAnswer) {
            return this.correctAnswer = true;
        }
        else if (selectedAnswer !== this.quizQuestions[0].quizAnswer) {
            return this.correctAnswer = false;
        }
        return this.correctAnswer;
    }

    

    getQuizQuestion(requestedQuizTopic: string): QuizQuestion {
        let quizQuestionsToSearch = this.quizQuestions;
        let requestedQuizQuestion!: QuizQuestion;
        for (let i:number = 0; i < quizQuestionsToSearch.length; i++) {
            if (quizQuestionsToSearch[i].questionTopic === requestedQuizTopic) {
              requestedQuizQuestion =  quizQuestionsToSearch[i] as QuizQuestion;
              return requestedQuizQuestion;
            }
        }
          return requestedQuizQuestion;
    }
}