import { Component, OnInit } from '@angular/core';
import {PersonalQuestion} from '../personalization-question/personalQuestion';

@Component({
  selector: 'app-intro-chapter-two',
  templateUrl: './intro-chapter-two.component.html',
  styleUrls: ['./intro-chapter-two.component.css']
})
export class IntroChapterTwoComponent implements OnInit {

  question: PersonalQuestion[] = [];
  requestedTopic: string = 'mobilitaet';

  constructor() { }

  ngOnInit(): void {
    this.createPersonalQuestion();
  }

  private createPersonalQuestion() {
    let personalQuestionMobility = PersonalQuestion.createWith('', '#');
    personalQuestionMobility.addChoice('', '#', '', '');
    personalQuestionMobility.addChoice('', '#', '', '');
    personalQuestionMobility.addChoice('', '#', '', '');
    this.question.push(personalQuestionMobility);
  }

}
