import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleRecommendationComponent } from './article-recommendation.component';

describe('ArticleRecommendationComponent', () => {
  let component: ArticleRecommendationComponent;
  let fixture: ComponentFixture<ArticleRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleRecommendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
