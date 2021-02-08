import { Component } from '@angular/core';
import {HeadlineImage} from './zoom-headline/headlineImage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// @ts-ignore
export class AppComponent {
  title = 'Klimabox-Story';
  zoomHeadlineImage: HeadlineImage[] = [];

  ngOnInit(): void {
    let headlineImageMeat = HeadlineImage.createWith('assets/images/personalization-question/fleisch.png', 'assets/images/personalization-question/kapitel1_table_background.png' );
    this.zoomHeadlineImage.push(headlineImageMeat);
  }
}
