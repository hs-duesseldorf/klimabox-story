export class Choice {

  private readonly _imagePath: string;
  private readonly _link: string;
  private readonly _posX: string;
  private readonly _posY: string;
  private readonly _width: string;

  constructor(imagePath: string, link: string, posX: string, posY: string, width: string) {
    this._imagePath = imagePath;
    this._link = link;
    this._posX = posX;
    this._posY = posY;
    this._width = width;
  }

  get imagePath() {
    return this._imagePath;
  }

  get link() {
    return this._link;
  }

  get posX() {
    return this._posX;
  }

  get posY() {
    return this._posY;
  }

  get width() {
    return this._width;
  }

}
