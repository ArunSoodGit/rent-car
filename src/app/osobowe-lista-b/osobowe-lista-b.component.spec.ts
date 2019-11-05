import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsoboweListaBComponent } from './osobowe-lista-b.component';

describe('OsoboweListaBComponent', () => {
  let component: OsoboweListaBComponent;
  let fixture: ComponentFixture<OsoboweListaBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsoboweListaBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsoboweListaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
