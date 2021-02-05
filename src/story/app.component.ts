import { Component } from '@angular/core';
import {PersonalQuestion} from './personalization-question/personalQuestion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// @ts-ignore
export class AppComponent {
  title = 'Klimabox-Story';
  question: PersonalQuestion[] = [];

  ngOnInit(): void {
    let personalQuestionFood = PersonalQuestion.createWith('Was isst du gerne?', 'assets/images/personalization-question/kapitel1_table_background.png' );
    personalQuestionFood.addChoice('assets/images/personalization-question/fleisch.png', '#', '-5', '6');
    personalQuestionFood.addChoice('assets/images/personalization-question/kaese.png', '#', '25', '5');
    personalQuestionFood.addChoice('assets/images/personalization-question/avocado.png', '#', '5', '28');
    personalQuestionFood.addChoice('assets/images/personalization-question/eier.png', '#', '25', '36');

    this.question.push(personalQuestionFood);
  }
}
