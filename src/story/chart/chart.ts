import {Consumption} from './consumption';

export class Chart {
  private _title: string;
  private _consumptions: Consumption[];

  static createWith(title: string): Chart {
    let chart = new Chart();
    chart.title = title;
    return chart;
  }

  constructor() {
    this._title = '';
    this._consumptions = [];
  }

  set title(value: string) {
    this._title = value;
  }

  addConsumption(topic: string, amount: number, unit: string, imagePath: string) {
    let consumption = new Consumption(topic, amount, unit, imagePath);
    this.add(consumption);
  }

  private add(...consumptions: Consumption[]) {
    this._consumptions.push(...consumptions);
  }

  get consumptions(): Consumption[] {
    return this._consumptions;
  }

  get title(): string {
    return this._title;
  }
}
