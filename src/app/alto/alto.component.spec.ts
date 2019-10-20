import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltoComponent } from './alto.component';

describe('AltoComponent', () => {
  let component: AltoComponent;
  let fixture: ComponentFixture<AltoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
