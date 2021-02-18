import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chapter-indicator',
  templateUrl: './chapter-indicator.component.html',
  styleUrls: ['./chapter-indicator.component.css']
})
export class ChapterIndicatorComponent implements OnInit {

  chapters: number[] = [];

  @Input()
  numberOfChapters: number = 0;

  @Input()
  currentChapter: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.createChapters();
  }

  private createChapters() {
    for (let i = 1; i <= this.numberOfChapters; i++) {
      this.chapters.push(i);
    }
  }

  alreadyVisited(chapter: number) {
    return chapter<=this.currentChapter;
  }
}
