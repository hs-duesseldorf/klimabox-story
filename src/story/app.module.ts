import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalizationQuestionComponent } from './personalization-question/personalization-question.component';
import { ChartComponent } from './chart/chart.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalizationQuestionComponent,
    ChartComponent,
    NavbarComponent
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
