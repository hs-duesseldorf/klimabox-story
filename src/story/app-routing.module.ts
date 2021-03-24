import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentBikeChapterTwoComponent} from './content-bike-chapter-two/content-bike-chapter-two.component';
import {ContentCarChapterTwoComponent} from './content-car-chapter-two/content-car-chapter-two.component';
import {HomeComponent} from './home/home.component';
import {IntroComponent} from './intro/intro.component';
import {IntroChapterTwoComponent} from './intro-chapter-two/intro-chapter-two.component';

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

