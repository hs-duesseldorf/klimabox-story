import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundOptionComponent } from './sound-option.component';

describe('SoundOptionComponent', () => {
  let component: SoundOptionComponent;
  let fixture: ComponentFixture<SoundOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
