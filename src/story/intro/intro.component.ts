import {Component, OnInit} from '@angular/core';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {PersonalQuestion} from '../personalization-question/personalQuestion';
import {HeadlineImage} from '../zoom-headline/headlineImage';
import {MassVisualization} from '../mass-visualization/massVisualization';
import {Chart} from '../chart/chart';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  question: PersonalQuestion[] = [];
  question2: PersonalQuestion[] = [];
  zoomHeadlineImage: HeadlineImage[] = [];
  massVisualization: MassVisualization[] = [];
  requestedTopic: String = 'ernaehrung';
  charts: Chart[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.createFirstPersonalQuestion();
    this.createMeatHeadline();
    this.createPigMassVisualization();
    this.createChartData();
    this.createSecondPersonalQuestion();
    gsap.registerPlugin(ScrollTrigger);
    this.scroll();
  }

  private createFirstPersonalQuestion() {
    let personalQuestionFood = PersonalQuestion.createWith('Was isst du gerne?', '#');
    personalQuestionFood.addChoice('assets/images/personalization-question/fleisch.png', 'chapter1#fleisch-headline', '-5', '6');
    personalQuestionFood.addChoice('assets/images/personalization-question/kaese.png', '#', '25', '5');
    personalQuestionFood.addChoice('assets/images/personalization-question/avocado.png', '#', '5', '28');
    personalQuestionFood.addChoice('assets/images/personalization-question/eier.png', '#', '25', '36');
    this.question.push(personalQuestionFood);
  }

  private createMeatHeadline() {
    let headlineImageMeat = HeadlineImage.createWith('assets/images/zoom-headline/fleisch.png');
    this.zoomHeadlineImage.push(headlineImageMeat);
  }

  private createPigMassVisualization() {
    let massVisualizationPig = MassVisualization.createWith(
      'assets/images/mass-visualization/massvisualize_pig.png',
      'rgba(105, 64, 37, 1), rgba(170, 97, 139, 1)',
      '46 Schweine',
      'isst ein Mensch \n in seinem Leben',
    );
    this.massVisualization.push(massVisualizationPig);
  }

  private createChartData() {
    let co2ConsumptionChart = Chart.createWith('Kg CO2 verursacht...');
    co2ConsumptionChart.addConsumption('1 Kg Fleisch', 120, 'Kg', '../../assets/chart/kapitel1_stats_rindfleisch.png');
    co2ConsumptionChart.addConsumption('1 Kg Eier', 60, 'Kg', '../../assets/chart/kapitel1_stats_eier.png');
    co2ConsumptionChart.addConsumption('1 Kg Soja', 30, 'Kg', '../../assets/chart/kapitel1_stats_vegan.png');

    let waterConsumptionChart = Chart.createWith('l Wasser verbraucht...');
    waterConsumptionChart.addConsumption('1 Kg Fleisch', 100, 'l', '../../assets/chart/kapitel1_stats_rindfleisch.png');
    waterConsumptionChart.addConsumption('1 Kg Eier', 70, 'l', '../../assets/chart/kapitel1_stats_eier.png');
    waterConsumptionChart.addConsumption('1 Kg Soja', 35, 'l', '../../assets/chart/kapitel1_stats_vegan.png');

    this.charts.push(co2ConsumptionChart, waterConsumptionChart);
  }

  private createSecondPersonalQuestion() {
    let personalQuestionFood2 = PersonalQuestion.createWith('Worüber möchtest du mehr erfahren?', '#');
    personalQuestionFood2.addChoice('assets/images/personalization-question/kaese.png', '#', '25', '5');
    personalQuestionFood2.addChoice('assets/images/personalization-question/avocado.png', '#', '5', '28');
    personalQuestionFood2.addChoice('assets/images/personalization-question/eier.png', '#', '25', '36');
    this.question2.push(personalQuestionFood2);
  }

  scroll() {
    let body = document.getElementById('intro');
    let mountain = document.getElementById('mountain');
    let building1 = document.getElementById('buildingA');
    let building2 = document.getElementById('buildingB');
    let building3 = document.getElementById('buildingC');
    let clue = document.getElementById('clue');
    let hl = document.getElementById('headline');
    let txt = document.getElementById('text');
    let sun = document.getElementById('sun');

    gsap.to(clue, {
      scrollTrigger: {
        trigger: 'hl',
        start: 'top top',
        end: '+=300',
        scrub: true,
        //markers: true
      },
      opacity: 0
    });

    gsap.to(txt, {
      scrollTrigger: {
        trigger: 'body',
        start: '1200px',
        end: '+=800',
        scrub: true
      },
      opacity: 1
    });

    gsap.to(sun, {
      scrollTrigger: {
        trigger: 'body',
        start: '1000px',
        end: '+=400',
        scrub: true
      },
      top: '0%'
    });

    gsap.to(mountain, {
      scrollTrigger: {
        trigger: 'body',
        start: '2500px',
        scrub: true,
        end: '+=1000px'
      },
      bottom: '-100%',
    });

    gsap.to(txt, {
      scrollTrigger: {
        trigger: 'body',
        start: '2500px',
        scrub: true,
        end: '+=400px'
      },
      opacity: 0,
    });

    gsap.to(building1, {
      scrollTrigger: {
        trigger: 'body',
        start: '3000px',
        scrub: true,
        end: '+=1500px'
      },
      bottom: '0%',
    });

    gsap.to(building2, {
      scrollTrigger: {
        trigger: 'body',
        start: '3000px',
        scrub: true,
        end: '+=1500px'
      },
      bottom: '0%',
    });

    gsap.to(building3, {
      scrollTrigger: {
        trigger: 'body',
        start: '3000px',
        scrub: true,
        end: '+=1500px'
      },
      bottom: '0%',
    });

    gsap.to(building1, {
      scrollTrigger: {
        trigger: 'body',
        start: '5000px',
        scrub: true,
        end: '+=1500px'
      },
      width: '150%',
      right: '-50%',
      bottom: '-170%'
    });

    gsap.to(building2, {
      scrollTrigger: {
        trigger: 'body',
        start: '5000px',
        scrub: true,
        end: '+=1500px'
      },
      width: '70%',
      bottom: '-75%'
    });

    gsap.to(building3, {
      scrollTrigger: {
        trigger: 'body',
        start: '5000px',
        scrub: true,
        end: '+=1500px'
      },
      width: '70%',
      bottom: '-30%'
    });

    gsap.to(body, {
      scrollTrigger: {
        trigger: 'body',
        start: '6700px',
        scrub: true,
        end: '+=200px'
      },
      opacity: 0
    });

    gsap.to('#tableBackground', {
      scrollTrigger: {
        trigger: '.massContainer',
        start: 'top top',
        scrub: true,
        end: '+=600px'
      },
      opacity: 0
    });

  };

}

