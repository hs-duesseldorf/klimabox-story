import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import {gsap} from 'gsap';
import Draggable from 'gsap/Draggable';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
   gsap.registerPlugin(ScrollTrigger);
   this.scroll();
  }

  scroll() {
    let body = document.getElementsByName("body");
    let background = document.getElementById("stars");
    let mountain = document.getElementById("mountain");
    let building1 = document.getElementById("buildingA");
    let building2 = document.getElementById("buildingB");
    let building3 = document.getElementById("buildingC");
    let clue = document.getElementById("clue");
    let hl = document.getElementById("headline");
    let txt = document.getElementById("text");
    let sun = document.getElementById("sun");
    
      gsap.to(clue, {
        scrollTrigger: {
          trigger: hl,
          start: "top top",
          end: "+=300",
          scrub: true,
          //markers: true
        },
        opacity: 0
      });

      gsap.to(txt, {
        scrollTrigger: {
          trigger: body,
          start: "1200px",
          end: "+=800",
          scrub: true
        },
        opacity: 1
      })

      gsap.to(sun, {
        scrollTrigger: {
          trigger: body,
          start: "1000px",
          end: "+=400",
          scrub: true
        },
        top: "0%"
      })

      gsap.to(mountain, {
        scrollTrigger: {
          trigger: body,
          start: "2500px",
          scrub: true,
          end: "+=1000px"
        },
        bottom: "-100%",
      })

      gsap.to(txt, {
        scrollTrigger: {
          trigger: body,
          start: "2500px",
          scrub: true,
          end: "+=400px"
        },
        opacity: 0,
      })

      gsap.to(building1, {
        scrollTrigger: {
          trigger: body,
          start: "3000px",
          scrub: true,
          end: "+=1500px"
        },
        bottom: "0%",
      })

      gsap.to(building2, {
        scrollTrigger: {
          trigger: body,
          start: "3000px",
          scrub: true,
          end: "+=1500px"
        },
        bottom: "0%",
      })

      gsap.to(building3, {
        scrollTrigger: {
          trigger: body,
          start: "3000px",
          scrub: true,
          end: "+=1500px"
        },
        bottom: "0%",
      })

      gsap.to(building1, {
        scrollTrigger: {
          trigger: body,
          start: "5000px",
          scrub: true,
          end: "+=1500px"
        },
        width: "150%",
        right: "-50%",
        bottom: "-170%"
      })

      gsap.to(building2, {
        scrollTrigger: {
          trigger: body,
          start: "5000px",
          scrub: true,
          end: "+=1500px"
        },
        width: "70%",
        bottom: "-75%"
      })

      gsap.to(building3, {
        scrollTrigger: {
          trigger: body,
          start: "5000px",
          scrub: true,
          end: "+=1500px"
        },
        width: "70%",
        bottom: "-30%"
      })

    };

}

