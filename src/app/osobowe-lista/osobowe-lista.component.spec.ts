import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsoboweListaComponent } from './osobowe-lista.component';

describe('OsoboweListaComponent', () => {
  let component: OsoboweListaComponent;
  let fixture: ComponentFixture<OsoboweListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsoboweListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsoboweListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
