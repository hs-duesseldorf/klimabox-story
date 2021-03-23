export class ArticleRecommendation {
    title: string;
    description: string;
    imgurl: string;
    date: string;
    url: string;
    isBookmarked: boolean;
    tags: string[];

    constructor(_title: string, _description: string, _imgurl: string, _date: string, _url: string, _isBookmarked: boolean, _tags: string[]){
        this.title = _title;
        this.description = _description;
        this.imgurl = _imgurl;
        this.date = _date;
        this.url = _url;
        this.isBookmarked = _isBookmarked;
        this.tags = _tags;
    }

}
