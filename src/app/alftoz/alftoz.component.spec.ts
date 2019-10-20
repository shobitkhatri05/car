import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlftozComponent } from './alftoz.component';

describe('AlftozComponent', () => {
  let component: AlftozComponent;
  let fixture: ComponentFixture<AlftozComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlftozComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlftozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
