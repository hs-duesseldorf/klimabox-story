import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

export interface IArticleService {
    getArticles(): Observable<Article[]>;
    getArticle(requestedTopic: String): Article;
}