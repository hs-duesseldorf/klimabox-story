import { Injectable } from '@angular/core';
import { ArticleRecommendation } from './article-recommendation';
import { Tags } from './tags';
import { TagsService } from './tags.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleRecommendationService {
  tagService: TagsService;
  constructor(tagService: TagsService) { 
    this.tagService = tagService;
  }
  getArticles(){
    return [
      new ArticleRecommendation("CARSHARING - LOHNT SICH DAS?", "Du weißt zwar, was Car-Sharing ist, bist dir aber nicht sicher, ob das auch etwas für dich ist? Dieser Artikel kann dir dabei helfen, ein bisschen Licht ins Dunkel zu bringen.", "assets/images/article-thumbnails/Car-Sharing-Lohnt-sich-das.jpeg", "30.01.2021", 'https://klimabox.mirevi.de/car-sharing-lohnt-sich-das/', true, [this.tagService.getTag("Mobilität"), this.tagService.getTag("Deutschland")]),
      new ArticleRecommendation("LEITFADEN ZUR MÜLLTRENNUNG", "Mülltrennung ist einer der einfachsten Wege, um von Zuhause aus etwas für die Umwelt zu tun. Doch viele Menschen sind sich unsicher, was wirklich in welchen Müll gehört.", "assets/images/article-thumbnails/Leitfaden-Muelltrennung.jpeg", "07.01.2021", 'https://klimabox.mirevi.de/leitfaden-zur-muelltrennung/', false, [this.tagService.getTag("Haushalt"), this.tagService.getTag("Zu Hause")])
    ]
  }
  
}
