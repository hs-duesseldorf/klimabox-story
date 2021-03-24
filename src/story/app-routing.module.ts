import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentCarChapterTwoComponent} from './content-car-chapter-two/content-car-chapter-two.component';
import {HomeComponent} from './home/home.component';
import {IntroComponent} from './intro/intro.component';
import {IntroChapterTwoComponent} from './intro-chapter-two/intro-chapter-two.component';
import { ArticleRecommendationComponent } from './article-recommendation/article-recommendation.component';

const routes: Routes = [
  {path: 'chapter1', component: IntroComponent},
  {path: 'chapter2', component: IntroChapterTwoComponent},
  {path: 'chapter2/car', component: ContentCarChapterTwoComponent},
  {path: 'chapter2/bike', component: ContentBikeChapterTwoComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

