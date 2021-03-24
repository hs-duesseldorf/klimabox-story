import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBikeChapterTwoComponent } from './content-bike-chapter-two.component';

describe('ContentBikeChapterTwoComponent', () => {
  let component: ContentBikeChapterTwoComponent;
  let fixture: ComponentFixture<ContentBikeChapterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBikeChapterTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBikeChapterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
