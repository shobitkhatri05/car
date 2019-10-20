import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalenoComponent } from './baleno.component';

describe('BalenoComponent', () => {
  let component: BalenoComponent;
  let fixture: ComponentFixture<BalenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
