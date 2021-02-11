import { Component, OnInit } from '@angular/core';
import { Chapter } from './chapter';
import { ChaptersService } from './chapters.service';
import {Router} from '@angular/router';
import { gsap, snap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chapters: Chapter[];
  backgroundImagePath: string = 'assets/home/home_header_uncropped.png';

  constructor(service: ChaptersService, private router: Router) {
    this.chapters = service.getChapters();
  }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(".background", {
      scrollTrigger: {
        trigger: ".background",
        start: "top center",
        end: "bottom center",
        scrub: true
      },
      y: -50,
    }
      )
  }
  routeToChapter(link: string) {
    window.scrollTo(0,0);
    this.router.navigateByUrl('/' +link );
  }
}
