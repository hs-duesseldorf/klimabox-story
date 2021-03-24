import { Injectable } from '@angular/core';
import { Tags } from './tags';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  tags: Tags[] = [new Tags("Mobilität", "#199BD7", "#FFFFFF"), new Tags("Haushalt", "#F7B9BC", "#FFFFFF"), new Tags("Zu Hause", "#E3E3E3", "#6F6F6F"), new Tags("Deutschland","#E3E3E3","#6F6F6F")];
  constructor() { 
    this.tags = [new Tags("Mobilität", "#199BD7", "#FFFFFF"), new Tags("Haushalt", "#F7B9BC", "#FFFFFF"), new Tags("Zu Hause", "#E3E3E3", "#6F6F6F"), new Tags("Deutschland","#E3E3E3","#6F6F6F")];
  }
  getTag(input: string): Tags{
    if(this.tags.length != 0){
      var tag: Tags;
      for(tag of this.tags){
        if(tag.title == input){
          return tag as Tags;
        }
      }
    } 
    return new Tags("not found", "#E3E3E3", "6F6F6F") as Tags;
  }
  
}
