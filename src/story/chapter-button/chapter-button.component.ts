import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-button',
  templateUrl: './chapter-button.component.html',
  styleUrls: ['./chapter-button.component.css']
})
export class ChapterButtonComponent implements OnInit {
  @Input() chapternumber: number = 0;
  @Input() imgurl: string = "";
  @Input() title: string = "";

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
