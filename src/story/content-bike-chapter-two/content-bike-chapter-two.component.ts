import { Component, OnInit } from '@angular/core';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';
import {AudioService} from '../services/audio.service';


@Component({
  selector: 'app-content-bike-chapter-two',
  templateUrl: './content-bike-chapter-two.component.html',
  styleUrls: ['./content-bike-chapter-two.component.css']
})
// @ts-ignore
export class ContentBikeChapterTwoComponent implements OnInit {

  constructor(private audioService: AudioService) { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.scroll();
  }

  scroll(): void {

    // bewegt bike accordion nach oben weg
    gsap.to('#bikeAccordion', {
      scrollTrigger: {
        trigger: '#triggerDiv',
        start: '+=0px',
        scrub: true,
        end: '+=200px'
      },
      top: '-200%'
    });

    // bewegt article-recommendation nach oben weg
    gsap.to('#article-recommendation', {
      scrollTrigger: {
        trigger: '#triggerDiv',
        start: '+=200',
        scrub: true,
        end: '+=600px'
      },
      top: '20%'
    });

    gsap.to('#contentZoomedIn', {
      scrollTrigger: {
        trigger: '#triggerDiv',
        start: '+=1000',
        scrub: true,
        end: '+=1200px'
      },
      opacity: 0
    });

    gsap.to('#articleZoomedOut', {
      scrollTrigger: {
        trigger: '#triggerDiv',
        start: '+=1000',
        scrub: true,
        end: '+=1100px'
      },
      opacity: 1
    });

    gsap.to('#bike', {
      scrollTrigger: {
        trigger: '#triggerDiv',
        start: '+=1400',
        scrub: true,
        end: '+=1700px',
        onEnter: () => this.audioService.play("assets/sounds/Fahrradklingel.mp3")
      },
      left: "60%"
    });


  }

}