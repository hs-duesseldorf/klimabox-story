import {Component, Input, OnInit} from '@angular/core';
import {MassVisualization} from './massVisualization';

@Component({
  selector: 'app-mass-visualization',
  templateUrl: './mass-visualization.component.html',
  styleUrls: ['./mass-visualization.component.css']
})
// @ts-ignore
export class MassVisualizationComponent implements OnInit {

  @Input()
    // @ts-ignore
  massVisualizations: MassVisualization[] = [];
  massVisualToShow: MassVisualization = new MassVisualization();

  constructor() { }

  ngOnInit(): void {
    if (this.massVisualizations.length>0) {
      this.show(this.massVisualizations[0]);
    }
  }

  show(massVisualization: MassVisualization): void {
    this.massVisualToShow = massVisualization;
  }

}
