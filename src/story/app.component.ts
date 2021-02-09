import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  title = 'Klimabox-Story';
  requestedTopic!: String;

  ngOnInit(): void {
    this.requestedTopic = "ernaehrung";
  }

}
