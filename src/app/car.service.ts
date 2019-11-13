import { Injectable, Input } from '@angular/core';
import Car from './car';
import { Cars } from './cars';





@Injectable({
  providedIn: 'root'
})



export class CarService {
  @Input()grupa;

  visibleCars: Car[] = [];
  i: number;

  constructor() { }

  getCars() {
    for ( this.i = 0; this.i < Cars.length; this.i++) {
      if ( Cars[this.i].grupa === this.grupa || this.grupa === 'all') {
        this.visibleCars.push(Cars[this.i]);
      }
    }
    console.log(this.grupa);
    return this.visibleCars;
  }
}
