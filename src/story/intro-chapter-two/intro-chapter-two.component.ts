import { Component, OnInit } from '@angular/core';
import {Chart} from '../chart/chart';
import { MassVisualization } from '../mass-visualization/massVisualization';
import {PersonalQuestion} from '../personalization-question/personalQuestion';

@Component({
  selector: 'app-intro-chapter-two',
  templateUrl: './intro-chapter-two.component.html',
  styleUrls: ['./intro-chapter-two.component.css']
})
// @ts-ignore
export class IntroChapterTwoComponent implements OnInit {

  question: PersonalQuestion[] = [];
  question2: PersonalQuestion[] = [];
  requestedTopic: string = 'mobilitaet';
  massVisualization: MassVisualization[] = [];
  charts: Chart[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createPersonalQuestion();
    this.createParticleMassVisualization();
    this.createChart();
  }

  private createPersonalQuestion() {
    let personalQuestionMobility = PersonalQuestion.createWith('', '#');
    personalQuestionMobility.addChoice('/assets/images/chapter2/Bahn.png', '#', '-650', '80', '8');
    personalQuestionMobility.addChoice('/assets/images/chapter2/Fahrrad.png', 'chapter2/bike', '700', '280', '9');
    personalQuestionMobility.addChoice('/assets/images/chapter2/Auto.png', 'chapter2/car', '760', '170', '8');
    this.question.push(personalQuestionMobility);
    let personalQuestionMobility2 = PersonalQuestion.createWith('', '#');
    personalQuestionMobility2.addChoice('', '#', '', '', '');
    personalQuestionMobility2.addChoice('', '#', '', '','');
    personalQuestionMobility2.addChoice('', '#', '', '', '');
    this.question2.push(personalQuestionMobility2);
  }

  private createParticleMassVisualization() {
    let massVisualizationParticle = MassVisualization.createWith('', '', '', '');
    this.massVisualization.push(massVisualizationParticle);
  }

  private createChart() {
    let mobilityChart = Chart.createWith('');
    mobilityChart.addConsumption('', 0, '', '');
    mobilityChart.addConsumption('', 0, '', '');
    mobilityChart.addConsumption('', 0, '', '');
    mobilityChart.addConsumption('', 0, '', '');
    this.charts.push(mobilityChart);
  }
}
