import { TestBed } from '@angular/core/testing';

import { ArticleRecommendationService } from './article-recommendation.service';

describe('ArticleRecommendationService', () => {
  let service: ArticleRecommendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleRecommendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
