import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterButtonComponent } from './chapter-button.component';

describe('ChapterButtonComponent', () => {
  let component: ChapterButtonComponent;
  let fixture: ComponentFixture<ChapterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
