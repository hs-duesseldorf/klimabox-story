import {Component, Input, OnInit} from '@angular/core';
import {HeadlineImage} from './headlineImage';

@Component({
  selector: 'app-zoom-headline',
  templateUrl: './zoom-headline.component.html',
  styleUrls: ['./zoom-headline.component.css']
})
// @ts-ignore
export class ZoomHeadlineComponent implements OnInit {

  @Input()
    // @ts-ignore
  headlineImages: HeadlineImage[] = [];
  imageToShow: HeadlineImage = new HeadlineImage();

  constructor() { }

  ngOnInit(): void {
    if (this.headlineImages.length>0) {
      this.show(this.headlineImages[0]);
    }
  }

  show(headlineImage: HeadlineImage): void {
    this.imageToShow = headlineImage;
  }

}
