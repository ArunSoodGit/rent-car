import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { Cars } from '../cars';
@Component({
  selector: 'app-osobowe-lista',
  templateUrl: './osobowe-lista.component.html',
  styleUrls: ['./osobowe-lista.component.scss']
})
export class OsoboweListaComponent implements OnInit {
  car: Car;
  carList = Cars;
  constructor() { }

  ngOnInit() {
  }

}
