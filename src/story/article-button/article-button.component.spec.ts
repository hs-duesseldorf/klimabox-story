import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleButtonComponent } from './article-button.component';

describe('ArticleButtonComponent', () => {
  let component: ArticleButtonComponent;
  let fixture: ComponentFixture<ArticleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
