import { Component, OnInit } from '@angular/core';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';
import {MassVisualization} from '../mass-visualization/massVisualization';
import {Chart} from '../chart/chart';
import { PersonalQuestion } from '../personalization-question/personalQuestion';

@Component({
  selector: 'app-content-car-chapter-two',
  templateUrl: './content-car-chapter-two.component.html',
  styleUrls: ['./content-car-chapter-two.component.css']
})
// @ts-ignore
export class ContentCarChapterTwoComponent implements OnInit {

  requestedTopic: string = 'mobilitaet';
  massVisualization: MassVisualization[] = [];
  requestedQuizTopic: string = "mobilitaet";
  charts: Chart[] = [];
  question: PersonalQuestion[] = [];

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.createParticleMassVisualization();
    this.createCarChart();
    this.createPersonalQuestion();
    this.scroll();
  }

  private createCarChart() {
    let mobilityChart = Chart.createWith('Auswahl');
    mobilityChart.addConsumption('3 km zu Fuß', 45, 'Minuten', '');
    mobilityChart.addConsumption('Bus / Bahn', 24, 'Minuten', 'assets/images/chapter2/kapitel2_diagramm_ubahn.png');
    mobilityChart.addConsumption('PKW', 20, 'Minuten', 'assets/images/chapter2/kapitel2_diagramm_pkw.png');
    mobilityChart.addConsumption('Fahrrad', 12, 'Minuten', 'assets/images/chapter2/kapitel2_diagramm_fahrrad.png');

    this.charts.push(mobilityChart);
  }

  private createParticleMassVisualization() {
    let massVisualizationParticle = MassVisualization.createWith('assets/images/chapter2/kapitel2_massvisualize_feinstaub_ideaplaceholder.png', '', '300 KG', 'CO2-Äquivalente können pro Kopf durchs Fahrrad gespart werden');
    this.massVisualization.push(massVisualizationParticle);
  }

  private createPersonalQuestion() {
    let personalQuestionMobility = PersonalQuestion.createWith('Möchtest du noch mehr erfahren?', '#');
    personalQuestionMobility.addChoice('/assets/images/chapter2/Bahn.png', '#', '-650', '80', '8');
    personalQuestionMobility.addChoice('/assets/images/chapter2/Fahrrad.png', '#', '700', '280', '9');
    this.question.push(personalQuestionMobility);
  }

  scroll() {
    gsap.to('#articleZoomedOut', {
      scrollTrigger: {
        trigger: '#articleZoomedOut',
        start: '+=50px',
        scrub: true,
        end: '+=200px'
      },
      opacity: 0
    });

    gsap.to('.quiz-component', {
      scrollTrigger: {
        trigger: '#articleZoomedOut',
        start: '+=-1px',
        scrub: true,
        end: '+=0px'
      },
      opacity: 0
    });

    gsap.to('#articleZoomedIn', {
      scrollTrigger: {
        trigger: '#articleZoomedOut',
        start: '+=50px',
        scrub: true,
        end: '+=500px'
      },
      opacity: 1
    });

    gsap.from('.massContainer', {
      scrollTrigger: {
        trigger: '.massContainer',
        start: 'top bottom',
        scrub: true,
        end: '+=1200px'
      },
      opacity: 0
    });

    gsap.to('.massContainer', {
      scrollTrigger: {
        trigger: '.textContainer',
        start: 'bottom top',
        scrub: true,
        end: '+=1500px'
      },
      opacity: 0
    });

    gsap.to('.quiz-component', {
      scrollTrigger: {
        trigger: '.textContainer',
        start: 'bottom top',
        scrub: true,
        end: '+=1500px'
      },
      opacity: 1
    });

    gsap.to('#carArticle2', {
      scrollTrigger: {
        trigger: '.textContainer',
        start: 'bottom top',
        scrub: true,
        end: '+=200px'
      },
      opacity: 0
    });

    gsap.to('#carQuiz', {
      scrollTrigger: {
        trigger: '.massContainer',
        start: 'bottom top',
        scrub: true,
        end: '+=1200px',
        markers: true
      },
      top: '-200%'
    });

    gsap.to('#carChart', {
      scrollTrigger: {
        trigger: '.massContainer',
        start: 'bottom top',
        scrub: true,
        end: '+=1200px',
        markers: true
      },
      top: '-150%'
    });

    gsap.to('#carChart', {
      scrollTrigger: {
        trigger: '#articleZoomedOut',
        start: '+=-1px',
        scrub: true,
        end: '+=0px'
      },
      opacity: 0
    });

    gsap.to('#carChart', {
      scrollTrigger: {
        trigger: '.quiz-component',
        start: 'top top',
        scrub: true,
        end: '+=1500px'
      },
      opacity: 1
    });

    gsap.to('#carChart', {
      scrollTrigger: {
        trigger: '.quiz-component',
        start: 'bottom top',
        scrub: true,
        end: '+=2000px'
      },
      top: '-200%'
    });
  }

}
