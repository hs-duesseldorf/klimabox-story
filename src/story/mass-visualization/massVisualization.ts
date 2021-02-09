export class MassVisualization {

  private _massImage: string;
  private _backgroundColor: string;
  private _headlineText: string;
  private _text: string;

  static createWith(massImage: string, backgroundColor: string, headlineText: string, text: string): MassVisualization {
    let massVisualization = new MassVisualization();
    massVisualization._massImage = massImage;
    massVisualization._backgroundColor = backgroundColor;
    massVisualization._headlineText = headlineText;
    massVisualization._text = text;
    return massVisualization;
  }

  constructor() {
    this._massImage = '';
    this._backgroundColor = '';
    this._headlineText = '';
    this._text = '';
  }

  set massImage(value: string) {
    this._massImage = value;
  }

  get massImage(): string {
    return this._massImage;
  }

  set backgroundColor(value: string) {
    this._backgroundColor = value;
  }

  get backgroundColor(): string {
    return this._backgroundColor;
  }

  set headlineText(value: string) {
    this._headlineText = value;
  }

  get headlineText(): string {
    return this._headlineText;
  }

  set text(value: string) {
    this._text = value;
  }

  get text(): string {
    return this._text;
  }
}
