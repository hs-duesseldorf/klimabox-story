import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalization-question',
  templateUrl: './personalization-question.component.html',
  styleUrls: ['./personalization-question.component.css']
})
// @ts-ignore
export class PersonalizationQuestionComponent implements OnInit {
  questionCategory = 'Ernährung';
  questionText = 'Wie ernährst du dich?';
  answers = [
    {
      text: 'Vegetarisch',
      link: '#'
    },
    {
      text: 'Vegan',
      link: '#'
    },
    {
      text: 'Mischkost',
      link: '#'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
