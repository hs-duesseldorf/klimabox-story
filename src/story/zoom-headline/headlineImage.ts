export class HeadlineImage {
  private _imagePath: string;
  private _backgroundImage: string;

  static createWith(imagePath: string, backgroundImage: string): HeadlineImage {
    let headlineImage = new HeadlineImage();
    headlineImage._imagePath = imagePath;
    headlineImage._backgroundImage = backgroundImage;
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

  get backgroundImage(): string {
    return this._backgroundImage;
  }
}
