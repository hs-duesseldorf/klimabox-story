import { TestBed } from '@angular/core/testing';

import { PersonalizationQuestionDataService } from './personalization-question-data.service';

describe('PersonalizationQuestionDataService', () => {
  let service: PersonalizationQuestionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalizationQuestionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
