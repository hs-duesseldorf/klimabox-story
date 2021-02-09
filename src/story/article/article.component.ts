import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.mock.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  articles!: Article[];
  sub!: Subscription;
  article!: Article;
  

  @Input() requestedTopic!: String;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getArticle(this.requestedTopic);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getArticles(): void {
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles);
  }

  getArticle(requestedTopic: String): void {
    this.article = this.articleService.getArticle(this.requestedTopic);
  }

}
