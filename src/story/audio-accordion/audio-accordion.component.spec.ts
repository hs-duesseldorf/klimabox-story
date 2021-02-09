import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioAccordionComponent } from './audio-accordion.component';

describe('AudioAccordionComponent', () => {
  let component: AudioAccordionComponent;
  let fixture: ComponentFixture<AudioAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
