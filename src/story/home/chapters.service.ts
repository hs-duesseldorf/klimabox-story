import { Injectable } from '@angular/core';
import { Chapter } from './chapter';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {
  getChapters(){
    return [
      new Chapter(1, "assets/home/home_kapitel_1.png", "Vom Esstisch in die Arktis", 'chapter1'),
      new Chapter(2, "assets/home/home_kapitel_2.png", "Mobilität", 'chapter2'),
      new Chapter(3, "assets/home/home_kapitel_3.png", "Big Tech ohne großen Fußabdruck", ''),
      new Chapter(4, "assets/home/home_kapitel_4.png", "Nachhaltig shoppen", ''),
      new Chapter(5, "assets/home/home_kapitel_5.png", "Wie unsere Heizkörper das Klima erwärmen", '')
    ]
  }
  constructor() { }
}
