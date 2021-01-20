import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullAvatarComponent } from './full-avatar.component';

describe('FullAvatarComponent', () => {
  let component: FullAvatarComponent;
  let fixture: ComponentFixture<FullAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
