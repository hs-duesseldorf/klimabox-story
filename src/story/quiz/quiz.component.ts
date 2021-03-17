import { Component, OnInit, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizQuestion } from '../models/quizQuestion.model';
import { QuizService } from '../services/quiz.mock.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnChanges {

  quizQuestion!: QuizQuestion;
  quizAnswer = new EventEmitter<string>();
  formGroup!: FormGroup;
  quizOption = '';

  @Input() requestedQuizTopic!: string;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.getQuizQuestion(this.requestedQuizTopic);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.quizQuestion && changes.quizQuestion.currentValue && !changes.quizQuestion.firstChange) {
      this.formGroup.patchValue({quizAnswer: ''});
    }
  }

  getQuizQuestion(requestedQuizTopic: String): void {
    this.quizQuestion = this.quizService.getQuizQuestion(this.requestedQuizTopic);
  }

  onChange(quizAnswer: string) {
    this.quizQuestion.selectedQuizOption = quizAnswer;
    this.quizAnswer.emit(quizAnswer);
  }

  isCorrect(quizOption: string): boolean {
    return !!(this.quizQuestion.selectedQuizOption && quizOption === this.quizQuestion.quizAnswer);
  }

  isIncorrect(quizOption: string): boolean {
    return quizOption != this.quizQuestion.quizAnswer && quizOption === this.quizQuestion.selectedQuizOption;
  }

}
