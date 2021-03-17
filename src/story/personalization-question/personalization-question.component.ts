import {Component, Input, OnInit} from '@angular/core';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {PersonalQuestion} from './personalQuestion';

@Component({
  selector: 'app-personalization-question',
  templateUrl: './personalization-question.component.html',
  styleUrls: ['./personalization-question.component.css'],
})
// @ts-ignore
export class PersonalizationQuestionComponent implements OnInit {

  @Input() // @ts-ignore
  personalQuestions: PersonalQuestion[] = [];
  questionToShow: PersonalQuestion = new PersonalQuestion();

  constructor() {
  }

  ngOnInit(): void {
    if (this.personalQuestions.length > 0) {
      this.show(this.personalQuestions[0]);
    }
  }

  show(question: PersonalQuestion): void {
    this.questionToShow = question;
  }

  disableScrolling() {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  enableScrolling() {
    window.onscroll = function () {
    };
  }
}
