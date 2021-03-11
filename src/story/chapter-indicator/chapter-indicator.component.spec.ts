import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterIndicatorComponent } from './chapter-indicator.component';

describe('ChapterIndicatorComponent', () => {
  let component: ChapterIndicatorComponent;
  let fixture: ComponentFixture<ChapterIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
