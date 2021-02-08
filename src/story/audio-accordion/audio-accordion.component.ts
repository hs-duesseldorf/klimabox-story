import { Renderer2 } from '@angular/core';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-accordion',
  templateUrl: './audio-accordion.component.html',
  styleUrls: ['./audio-accordion.component.css']
})
export class AudioAccordionComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {


  }

  @HostListener('window:click', ['$event'])
  maximize(event: any): void {
    const firstMid = document.getElementById('first-mid');
    const secondMid = document.getElementById('second-mid');
    const thirdMid = document.getElementById('third-mid');

    if (firstMid != null && secondMid != null && thirdMid != null) {
      if (event.target.id === 'first-icon') {

        firstMid.classList.remove('min');
        firstMid.classList.add('audio-player-mid');

        secondMid.classList.add('min');
        thirdMid.classList.add('min');
      }

      if (event.target.id === 'second-icon') {
        secondMid.classList.remove('min');
        secondMid.classList.add('audio-player-mid');

        firstMid.classList.add('min');
        thirdMid.classList.add('min');
      }

      if (event.target.id === 'third-icon') {
        thirdMid.classList.remove('min');
        thirdMid.classList.add('audio-player-mid');

        firstMid.classList.add('min');
        secondMid.classList.add('min');
      }
    }
  }
}
