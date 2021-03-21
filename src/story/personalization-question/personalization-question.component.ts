import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (this.personalQuestions.length > 0) {
      this.show(this.personalQuestions[0]);
    }
  }

  show(question: PersonalQuestion): void {
    this.questionToShow = question;
  }

  routeToContent(link: string) {
    window.scrollTo(0,0);
    this.router.navigateByUrl('/' +link );
  }
}

