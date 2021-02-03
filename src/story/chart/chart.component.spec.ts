import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';
import {Chart} from './chart';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows chart with data', () => {
    let topic = 'Fleisch'
    let amount = 120;
    let unit = 'Kg';
    let chart = Chart.createWith('');
    chart.addConsumption(topic, amount, unit, '');
    component.charts.push(chart);
    component.show(chart);
    expect(fixture.nativeElement.querySelector('#' + topic).innerHTML).toBe(topic);
    expect(fixture.nativeElement.querySelector('#' + topic + '-amount').innerHTML).toBe(amount + ' ' + unit);
  });

  it('shows chart with multiple data', () => {
    let unit = 'Kg';
    let topicMeat = 'Fleisch'
    let amountMeat = 120;
    let topicEgg = 'Eier'
    let amountEgg = 60;
    let chart = Chart.createWith('');
    chart.addConsumption(topicMeat, amountMeat, unit, '');
    chart.addConsumption(topicEgg, amountEgg, unit, '');
    component.charts.push(chart);
    component.show(chart);
    expect(fixture.nativeElement.querySelector('#' + topicMeat).innerHTML).toBe(topicMeat);
    expect(fixture.nativeElement.querySelector('#' + topicMeat + '-amount').innerHTML).toBe(amountMeat + ' ' + unit);
    expect(fixture.nativeElement.querySelector('#' + topicEgg).innerHTML).toBe(topicEgg);
    expect(fixture.nativeElement.querySelector('#' + topicEgg + '-amount').innerHTML).toBe(amountEgg + ' ' + unit);
  });

});
