export class Chapter {
    chapternumber: number;
    imgurl: string;
    title: string;
    link: string

    constructor(_chapternumber: number, _imgurl: string, _title: string, _link: string){
        this.chapternumber = _chapternumber;
        this.imgurl = _imgurl;
        this.title = _title;
        this.link = _link;
    }


}
