export class HeadlineImage {
  private _imagePath: string;

  static createWith(imagePath: string): HeadlineImage {
    let headlineImage = new HeadlineImage();
    headlineImage._imagePath = imagePath;
    return headlineImage;
  }

  constructor() {
    this._imagePath = '';
  }

  set imagePath(value: string) {
    this._imagePath = value;
  }

  get imagePath(): string {
    return this._imagePath;
  }
}
