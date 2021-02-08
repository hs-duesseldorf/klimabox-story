import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomHeadlineComponent } from './zoom-headline.component';

describe('ZoomHeadlineComponent', () => {
  let component: ZoomHeadlineComponent;
  let fixture: ComponentFixture<ZoomHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomHeadlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
