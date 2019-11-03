import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsoboweComponent } from './osobowe.component';

describe('OsoboweComponent', () => {
  let component: OsoboweComponent;
  let fixture: ComponentFixture<OsoboweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsoboweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsoboweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
