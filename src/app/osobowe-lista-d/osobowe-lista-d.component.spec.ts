import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsoboweListaDComponent } from './osobowe-lista-d.component';

describe('OsoboweListaDComponent', () => {
  let component: OsoboweListaDComponent;
  let fixture: ComponentFixture<OsoboweListaDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsoboweListaDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsoboweListaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
