import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaKlientComponent } from './lista-klient.component';

describe('ListaKlientComponent', () => {
  let component: ListaKlientComponent;
  let fixture: ComponentFixture<ListaKlientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaKlientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaKlientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
