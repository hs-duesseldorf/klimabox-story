import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleRecommendation } from './article-recommendation';
import { ArticleRecommendationService } from './article-recommendation.service';

@Component({
  selector: 'app-article-recommendation',
  templateUrl: './article-recommendation.component.html',
  styleUrls: ['./article-recommendation.component.css']
})
export class ArticleRecommendationComponent implements OnInit {
articles: ArticleRecommendation[];

  constructor(service: ArticleRecommendationService, private router: Router) { 
    this.articles = service.getArticles();
  }

  ngOnInit(): void {
  }

}
