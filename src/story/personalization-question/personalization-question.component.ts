import { Component, OnInit } from '@angular/core';
import {PersonalizationQuestionDataService} from "../personalization-question-data.service";

@Component({
  selector: 'app-personalization-question',
  templateUrl: './personalization-question.component.html',
  styleUrls: ['./personalization-question.component.css']
})
// @ts-ignore
export class PersonalizationQuestionComponent implements OnInit {
  questionText;
  answers;

  constructor(private personalizationQuestionData: PersonalizationQuestionDataService) {
    this.questionText = this.personalizationQuestionData.getQuestionText();
    this.answers = this.personalizationQuestionData.getAnswers();
  }

  ngOnInit(): void {
  }

}
