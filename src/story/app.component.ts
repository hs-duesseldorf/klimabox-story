import {Component} from '@angular/core';
import {MassVisualization} from './mass-visualization/massVisualization';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// @ts-ignore
export class AppComponent {
  title = 'Klimabox-Story';
  massVisualization: MassVisualization[] = [];

  ngOnInit(): void {
    let text = 'isst ein Mensch \n in seinem Leben'
    let massVisualizationPig = MassVisualization.createWith(
      'assets/images/mass-visualization/massvisualize_pig.png',
      'rgba(105, 64, 37, 1), rgba(170, 97, 139, 1)',
      '46 Schweine',
      text,
    );
    this.massVisualization.push(massVisualizationPig);
  }
}
