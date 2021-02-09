import { Component, OnInit } from '@angular/core';
import { Chapter } from './chapter';
import { ChaptersService } from './chapters.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chapters: Chapter[];

  // chapternumber: number = 1;
  // imgurl: string = "../assets/home/home_kapitel_1.png";
  // title: string = "Vom Esstisch zu der Arktis";
  screenHeight;
  screenWidth;
  buttonHeight;
  buttonWidth;


  constructor(service: ChaptersService, private router: Router) {
    this.chapters = service.getChapters();
    this.screenHeight = (window.screen.height) + "px";
    this.screenWidth = (window.screen.width) + "px";
    this.buttonHeight = (window.screen.height / 6 )+ "px";
    this.buttonWidth = (window.screen.width / 6 ) + "px";
    console.log(this.screenHeight);
          console.log(this.screenWidth)
  }

  ngOnInit(): void {
  }

  routeToChapter(link: string) {
    this.router.navigateByUrl('/' + link);
  }
}
