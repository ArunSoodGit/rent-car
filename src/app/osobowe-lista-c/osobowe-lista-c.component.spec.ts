import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsoboweListaCComponent } from './osobowe-lista-c.component';

describe('OsoboweListaCComponent', () => {
  let component: OsoboweListaCComponent;
  let fixture: ComponentFixture<OsoboweListaCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsoboweListaCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsoboweListaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
