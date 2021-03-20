import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Chart} from './chart';
import {Consumption} from './consumption';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input()
  charts: Chart[] = [];
  selectedChart: Chart = new Chart();
  @Input()
  heading: string = '';

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    if (this.charts.length>0) {
      this.show(this.charts[0]);
    }
  }

  show(chart: Chart): void {
    this.selectedChart = chart;
    this.changeDetectorRef.detectChanges();
  }

  calculatePercentage(consumption: Consumption) {
    let firstConsumptionAmount = this.selectedChart.consumptions[0].amount;
    let availableWidthInPercent = 80;
    return (availableWidthInPercent/firstConsumptionAmount)*consumption.amount;
  }

  calculateButtonWidth(): string {
    return (100/this.charts.length) + "%";
  }

  hasBackgroundImage(consumption: Consumption) {
    return consumption.imagePath!='';
  }
}
