import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsandreviewsComponent } from './newsandreviews.component';

describe('NewsandreviewsComponent', () => {
  let component: NewsandreviewsComponent;
  let fixture: ComponentFixture<NewsandreviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsandreviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsandreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
