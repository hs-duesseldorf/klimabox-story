import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ChapterIndicatorComponent } from './chapter-indicator/chapter-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    NavbarComponent,
    ChapterIndicatorComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
