import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-button',
  templateUrl: './article-button.component.html',
  styleUrls: ['./article-button.component.css']
})
export class ArticleButtonComponent implements OnInit {
  @Input() imgurl: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() date: string = "";
  @Input() url: string = ""

  isBookmarked: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
  routeToUrl(link: string){
    this.document.location.href = link;
    console.log("clicked on article");
  }
  toggleBookmark() {
    if(document.getElementById(this.title) != null){
      this.isBookmarked = !this.isBookmarked;
      console.log("is bookmarked: " + this.isBookmarked);
      if(this.isBookmarked){
        document.getElementById(this.title)!.style.fill= "#E78182";
        console.log("bookmark of " + this.title + " = " + this.isBookmarked);
      } else {
        document.getElementById(this.title)!.style.fill= "none";
        console.log("bookmark of " + this.title + " = " + this.isBookmarked);
      }
    }
    else{
      console.log("bookmark element not found");
    }
  }
}
