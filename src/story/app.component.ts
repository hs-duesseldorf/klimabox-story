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
    let headlineImageMeat = HeadlineImage.createWith('assets/images/zoom-headline/fleisch.png', 'assets/images/zoom-headline/kapitel1_table_background.png' );
    this.zoomHeadlineImage.push(headlineImageMeat);
  }
}
