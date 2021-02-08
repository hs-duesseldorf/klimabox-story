import { Component } from '@angular/core';
import {PersonalQuestion} from './personalization-question/personalQuestion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// @ts-ignore
export class AppComponent {
  title = 'Klimabox-Story';

  ngOnInit(): void {
  }
}
