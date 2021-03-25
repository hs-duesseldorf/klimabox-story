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
    let personalQuestionMobility = PersonalQuestion.createWith('Worüber möchtest du noch mehr erfahren?', '#');
    personalQuestionMobility.addChoice('/assets/images/chapter2/Bahn.png', '#', '-250', '300', '8');
    personalQuestionMobility.addChoice('/assets/images/chapter2/Fahrrad.png', 'chapter2/bike', '1200', '500', '9');
    this.question.push(personalQuestionMobility);
  }

  scroll() {

    //Herausgezoomten Artikel ausblenden
    gsap.to('#articleZoomedOut', {
      scrollTrigger: {
        trigger: '#articleZoomedOut',
        start: '+=100px',
        scrub: true,
        end: '+=300px'
      },
      opacity: 0
    });

    gsap.to('#car', {
      scrollTrigger: {
        trigger: '#articleZoomedOut',
        start: '+=5px',
        scrub: true,
        end: '+=100px'
      },
      left: "60%"
    });

    //Quiz verstecken
    gsap.to('.quiz-component', {
      scrollTrigger: {
        trigger: '#articleZoomedOut',
        start: '+=-1px',
        scrub: true,
        end: '+=0px'
      },
      opacity: 0
    });

    //Gezoomten Artikel einblenden
    gsap.to('#articleZoomedIn', {
      scrollTrigger: {
        trigger: '#articleZoomedOut',
        start: '+=50px',
        scrub: true,
        end: '+=500px'
      },
      opacity: 1
    });

    //Massenvisualisierung einblenden
    gsap.from('.massContainer', {
      scrollTrigger: {
        trigger: '.massContainer',
        start: 'top bottom',
        scrub: true,
        endTrigger: '.textContainer',
        end: 'top top'
      },
      opacity: 0
    });

    //Massenvisualisierung ausblenden
    gsap.to('.massContainer', {
      scrollTrigger: {
        trigger: '.textContainer',
        start: 'top top',
        scrub: true,
        endTrigger: '.massContainer',
        end: 'bottom bottom'
      },
      opacity: 0
    });

    //Artikel ausblenden
    gsap.to('#carArticle2', {
      scrollTrigger: {
        trigger: '.textContainer',
        start: 'bottom top',
        scrub: true,
        endTrigger: '.massContainer',
        end: 'bottom bottom'
      },
      opacity: 0
    });

    //Quiz einblenden
    gsap.to('.quiz-component', {
      scrollTrigger: {
        trigger: '.textContainer',
        start: 'top top',
        scrub: true,
        endTrigger: '.massContainer',
        end: 'bottom bottom'
      },
      opacity: 1
    });

    //Quiz nach oben schieben
    gsap.to('#carQuiz', {
      scrollTrigger: {
        trigger: '.massContainer',
        start: 'bottom top',
        scrub: true,
        end: '+=1200px',
        markers: true
      },
      top: '-500%'
    });

    // Chart von unten ins Bild schieben
    gsap.to('#carChart', {
      scrollTrigger: {
        trigger: '.massContainer',
        start: 'bottom top',
        scrub: true,
        end: '+=1800px',
        markers: true
      },
      top: '50%'
    });

    // Chart von der mitte aus dem Bild schieben
    gsap.to('#carChart', {
      scrollTrigger: {
        trigger: '.massContainer',
        start: 'bottom top',
        scrub: true,
        end: '+=2400px',
        markers: true
      },
      top: '-500%'
    });

    // Question von unten ins bild schieben
    gsap.to('#chapter2_question1', {
      scrollTrigger: {
        trigger: '.massContainer',
        start: 'bottom top',
        scrub: true,
        end: '+=3600px',
        markers: true
      },
      top: '-5%'
    });

  }

}
