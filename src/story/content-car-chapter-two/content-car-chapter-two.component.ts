import { Component, OnInit } from '@angular/core';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';
import {MassVisualization} from '../mass-visualization/massVisualization';

@Component({
  selector: 'app-content-car-chapter-two',
  templateUrl: './content-car-chapter-two.component.html',
  styleUrls: ['./content-car-chapter-two.component.css']
})
// @ts-ignore
export class ContentCarChapterTwoComponent implements OnInit {

  requestedTopic: string = 'mobilitaet';
  massVisualization: MassVisualization[] = [];

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.createParticleMassVisualization();
    this.scroll();
  }

  private createParticleMassVisualization() {
    let massVisualizationParticle = MassVisualization.createWith('assets/images/chapter2/kapitel2_massvisualize_feinstaub_ideaplaceholder.png', '', '300 KG', 'CO2-Äquivalente können pro Kopf durchs Fahrrad gespart werden');
    this.massVisualization.push(massVisualizationParticle);
  }

  scroll() {

    gsap.from('.massContainer', {
      scrollTrigger: {
        trigger: '.massContainer',
        start: 'top bottom',
        scrub: true,
        end: '+=600px'
      },
      opacity: 0
    });

    gsap.to('.massContainer', {
      scrollTrigger: {
        trigger: '.textContainer',
        start: 'bottom top',
        scrub: true,
        end: '+=1400px'
      },
      opacity: 0
    });

    gsap.to('#articleZoomedOut', {
      scrollTrigger: {
        trigger: '#articleZoomedOut',
        start: '+=50px',
        scrub: true,
        end: '+=200px'
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

  }

}
