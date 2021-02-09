import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizationQuestionComponent } from './personalization-question.component';

describe('PersonalizationQuestionComponent', () => {
  let component: PersonalizationQuestionComponent;
  let fixture: ComponentFixture<PersonalizationQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalizationQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizationQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
