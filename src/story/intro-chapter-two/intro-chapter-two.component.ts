import { Component, OnInit } from '@angular/core';
import { MassVisualization } from '../mass-visualization/massVisualization';
import {PersonalQuestion} from '../personalization-question/personalQuestion';

@Component({
  selector: 'app-intro-chapter-two',
  templateUrl: './intro-chapter-two.component.html',
  styleUrls: ['./intro-chapter-two.component.css']
})
export class IntroChapterTwoComponent implements OnInit {

  question: PersonalQuestion[] = [];
  requestedTopic: string = 'mobilitaet';
  massVisualization: MassVisualization[] = []; 
  charts: Chart[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createPersonalQuestion();
    this.createParticleMassVisualization();
  }

  private createPersonalQuestion() {
    let personalQuestionMobility = PersonalQuestion.createWith('', '#');
    personalQuestionMobility.addChoice('', '#', '', '');
    personalQuestionMobility.addChoice('', '#', '', '');
    personalQuestionMobility.addChoice('', '#', '', '');
    this.question.push(personalQuestionMobility);
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
