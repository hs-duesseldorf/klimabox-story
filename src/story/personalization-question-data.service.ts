import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class PersonalizationQuestionDataService {
  questionText = 'Was isst du gerne?';
  answers = [
    {
      text: 'Fleisch',
      imageSource: 'assets/images/personalization-question/fleisch.png',
      articleUrl: '#',
      cssClass: 'answerOne'
    },
    {
      text: 'Käse',
      imageSource: 'assets/images/personalization-question/kaese.png',
      articleUrl: '#',
      cssClass: 'answerTwo'
    },
    {
      text: 'Avocado',
      imageSource: 'assets/images/personalization-question/avocado.png',
      articleUrl: '#',
      cssClass: 'answerThree'
    },
    {
      text: 'Eier',
      imageSource: 'assets/images/personalization-question/eier.png',
      articleUrl: '#',
      cssClass: 'answerFour'
    }
  ];

  constructor() { }

  getQuestionText() {
    return this.questionText;
  }

  getAnswers() {
    return this.answers;
  }
}
