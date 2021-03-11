import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassVisualizationComponent } from './mass-visualization.component';

describe('MassVisualizationComponent', () => {
  let component: MassVisualizationComponent;
  let fixture: ComponentFixture<MassVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassVisualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
