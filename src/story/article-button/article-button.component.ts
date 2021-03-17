import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-button',
  templateUrl: './article-button.component.html',
  styleUrls: ['./article-button.component.css']
})
export class ArticleButtonComponent implements OnInit {
  @Input() imgurl: String = "";
  @Input() title: String = "";
  @Input() description: String = "";
  @Input() date: String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
