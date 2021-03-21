import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCarChapterTwoComponent } from './content-car-chapter-two.component';

describe('ContentCarChapterTwoComponent', () => {
  let component: ContentCarChapterTwoComponent;
  let fixture: ComponentFixture<ContentCarChapterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCarChapterTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCarChapterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
