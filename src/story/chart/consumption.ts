export class Consumption {
  private readonly _topic: string;
  private readonly _amount: number;
  private readonly _unit: string;
  private readonly _imagePath: string;

  constructor(topic: string, amount: number, unit: string, imagePath: string) {
    this._topic = topic;
    this._amount = amount;
    this._unit = unit;
    this._imagePath = imagePath;
  }

  get topic(): string {
    return this._topic;
  }

  get amount(): number {
    return this._amount;
  }

  get unit(): string {
    return this._unit;
  }

  get imagePath(): string {
    return this._imagePath;
  }
}
