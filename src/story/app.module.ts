import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { environment } from '../environments/environment';
import { IntroComponent } from './intro/intro.component';
import { PersonalizationQuestionComponent } from './personalization-question/personalization-question.component';
import { ChartComponent } from './chart/chart.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ZoomHeadlineComponent } from './zoom-headline/zoom-headline.component';
import { MassVisualizationComponent } from './mass-visualization/mass-visualization.component';
import { ChapterButtonComponent } from './chapter-button/chapter-button.component';
import { HomeComponent } from './home/home.component';
import { ChaptersService } from './home/chapters.service';
import {AudioAccordionComponent} from './audio-accordion/audio-accordion.component';
import { QuizComponent } from './quiz/quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    IntroComponent,
    PersonalizationQuestionComponent,
    ChartComponent,
    NavbarComponent,
    ZoomHeadlineComponent,
    MassVisualizationComponent,
    ChapterButtonComponent,
    HomeComponent,
    AudioAccordionComponent,
    QuizComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [
    ChaptersService,
    ...environment.providers
  ],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule { }
