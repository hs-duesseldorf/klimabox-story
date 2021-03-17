import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroChapterTwoComponent } from './intro-chapter-two.component';

describe('IntroChapterTwoComponent', () => {
  let component: IntroChapterTwoComponent;
  let fixture: ComponentFixture<IntroChapterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroChapterTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroChapterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
