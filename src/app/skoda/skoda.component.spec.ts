import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkodaComponent } from './skoda.component';

describe('SkodaComponent', () => {
  let component: SkodaComponent;
  let fixture: ComponentFixture<SkodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
