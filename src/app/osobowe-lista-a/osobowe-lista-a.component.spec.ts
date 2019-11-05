import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsoboweListaAComponent } from './osobowe-lista-a.component';

describe('OsoboweListaAComponent', () => {
  let component: OsoboweListaAComponent;
  let fixture: ComponentFixture<OsoboweListaAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsoboweListaAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsoboweListaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
