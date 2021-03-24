import { Injectable } from '@angular/core';
import { ArticleRecommendation } from './article-recommendation';

@Injectable({
  providedIn: 'root'
})
export class ArticleRecommendationService {
  getArticles(){
    return [
      new ArticleRecommendation("CARSHARING", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ", "assets/images/article-thumbnails/carsharing.png", "16.03.2021", ''),
      new ArticleRecommendation("NACHHALTIGER EINKAUFEN", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ", "assets/images/article-thumbnails/nachhaltiges-einkaufen.png", "10.03.2021", '')
    ]
  }
  constructor() { }
}
