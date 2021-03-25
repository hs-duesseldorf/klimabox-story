import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { QuizQuestion } from '../models/quizQuestion.model';
import { QuizService } from '../services/quiz.mock.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Output() quizQuestion!: QuizQuestion;
  @Output() quizAnswer = new EventEmitter<string>();
  option: any = '';
  // solution = '../../assets/images/chapter2/Questionmark.png';
  quizAttempted: boolean = false;
  quizSolved!: boolean;
  CORRECT!: string;
  WRONG!: string;
  disabled: boolean = false;


  @Input() requestedQuizTopic!: string;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.getQuizQuestion(this.requestedQuizTopic);
  }

  getQuizQuestion(requestedQuizTopic: String): void {
    this.quizQuestion = this.quizService.getQuizQuestion(this.requestedQuizTopic);
  }

  onChange(event: any) {
    this.quizQuestion.selectedQuizOption = event.target.value;
    this.quizAttempted = true;
    this.disabled = true;
    if (this.quizService.checkAnswer(this.quizQuestion.selectedQuizOption) == true) {
      this.CORRECT = 'assets/images/chapter2/Correct.png';
      this.quizSolved = true;
    }
    else if (this.quizService.checkAnswer(this.quizQuestion.selectedQuizOption) == false) {
      this.WRONG = 'assets/images/chapter2/Incorrect.png';
      this.quizSolved = false;
    }
  }

  isCorrect(option: string): boolean {
    return !!(this.quizQuestion.selectedQuizOption && option === this.quizQuestion.quizAnswer);
  }

  isIncorrect(option: string): boolean {
    return option != this.quizQuestion.quizAnswer && option === this.quizQuestion.selectedQuizOption;
  }

}
