import { Component, OnInit } from '@angular/core';
import {Chart} from '../chart/chart';
import { MassVisualization } from '../mass-visualization/massVisualization';
import {PersonalQuestion} from '../personalization-question/personalQuestion';

@Component({
  selector: 'app-intro-chapter-two',
  templateUrl: './intro-chapter-two.component.html',
  styleUrls: ['./intro-chapter-two.component.css']
})
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
    personalQuestionMobility.addChoice('/assets/images/chapter2/kapitel2_bahn_auswahl.png', '#', '-15', '');
    personalQuestionMobility.addChoice('/assets/images/chapter2/kapitel2_fahrrad_auswahl.png', '#', '20', '');
    personalQuestionMobility.addChoice('/assets/images/chapter2/kapitel2_auto_auswahl.png', '#', '30', '');
    this.question.push(personalQuestionMobility);
    let personalQuestionMobility2 = PersonalQuestion.createWith('', '#');
    personalQuestionMobility2.addChoice('', '#', '', '');
    personalQuestionMobility2.addChoice('', '#', '', '');
    personalQuestionMobility2.addChoice('', '#', '', '');
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
