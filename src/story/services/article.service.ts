import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article.model';
import { IArticleService } from './article.service.interface';


@Injectable({
  providedIn: 'root'
})


export class ArticleService implements IArticleService {

  testArticle: Article = {
      id: 0, 
      topic: '', 
      category: '', 
      headline: '', 
      content: ''
  };

  constructor(private httpClient: HttpClient) { }

  getArticles() {
    return this.httpClient.get('/api/article') as Observable<Article[]>;
  }

  getArticle(requestedTopic: String): Article {
    return this.testArticle;
  }

}
