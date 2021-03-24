import { Component, OnInit } from '@angular/core';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';


@Component({
  selector: 'app-content-bike-chapter-two',
  templateUrl: './content-bike-chapter-two.component.html',
  styleUrls: ['./content-bike-chapter-two.component.css']
})
// @ts-ignore
export class ContentBikeChapterTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.scroll();
  }

  scroll(): void {
    // gsap.to('#bikeAccordion', {
    //   scrollTrigger: {
    //     trigger: '#triggerDiv',
    //     start: '+=0px',
    //     scrub: true,
    //     end: '+=200px'
    //   },
    //   top: '-200%'
    // });
  }

}
