export class ArticleRecommendation {
    title: String;
    description: String;
    imgurl: String;
    date: String;
    url: String;

    constructor(_title: String, _description: String, _imgurl: String, _date: String, _url: String){
        this.title = _title;
        this.description = _description;
        this.imgurl = _imgurl;
        this.date = _date;
        this.url = _url;
    }

}
