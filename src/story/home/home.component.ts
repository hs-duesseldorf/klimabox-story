import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chapternumber: number = 1;
  imgurl: string = "../assets/home/home_kapitel_1.png";
  title: string = "Vom Esstisch zu der Arktis";

  constructor() { }

  ngOnInit(): void {
  }

}
