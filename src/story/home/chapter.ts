export class Chapter {
    chapternumber: number;
    imgurl: string;
    title: string;
    url: string;

    constructor(_chapternumber: number, _imgurl: string, _title: string, _url: string){
        this.chapternumber = _chapternumber;
        this.imgurl = _imgurl;
        this.title = _title;
        this.url = _url;
    }

    
}