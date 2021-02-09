import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalizationQuestionComponent } from './personalization-question/personalization-question.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChapterButtonComponent } from './chapter-button/chapter-button.component';
import { HomeComponent } from './home/home.component';
import { ChaptersService } from './home/chapters.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonalizationQuestionComponent,
    NavbarComponent,
    ChapterButtonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ChaptersService
  ],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule { }
