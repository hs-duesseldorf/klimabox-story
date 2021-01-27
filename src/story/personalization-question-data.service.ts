import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class PersonalizationQuestionDataService {
  questionCategory = 'Ernährung';
  questionText = 'Wie ernährst du dich?';
  answers = [
    {
      text: 'Fleischlastig',
      imageSource: './assets/images/fleischlastig.png',
      articleUrl: '#'
    },
    {
      text: 'Vegetarisch',
      imageSource: './assets/images/vegetarisch.png',
      articleUrl: '#'
    },
    {
      text: 'Vegan',
      imageSource: './assets/images/vegan.png',
      articleUrl: '#'
    }
  ];

  constructor() { }

  getQuestionCategory() {
    return this.questionCategory;
  }

  getQuestionText() {
    return this.questionText;
  }

  getAnswers() {
    return this.answers;
  }
}
