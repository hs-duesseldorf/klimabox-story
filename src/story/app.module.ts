import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { PersonalizationQuestionComponent } from './personalization-question/personalization-question.component';
import { ChartComponent } from './chart/chart.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ZoomHeadlineComponent } from './zoom-headline/zoom-headline.component';
import { MassVisualizationComponent } from './mass-visualization/mass-visualization.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PersonalizationQuestionComponent,
    ChartComponent,
    NavbarComponent,
    ZoomHeadlineComponent,
    MassVisualizationComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule { }
