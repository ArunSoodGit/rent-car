import { Component, OnInit, OnChanges, Input } from '@angular/core';
import Car from '../car';
import { Cars } from '../cars';

@Component({
  selector: 'app-osobowe-lista',
  templateUrl: './osobowe-lista.component.html',
  styleUrls: ['./osobowe-lista.component.scss']
})
export class OsoboweListaComponent implements OnInit {

@Input()grupa;

  visibleCars: Car[] = [];
  i: number;

  constructor() { }


  ngOnInit() {

     return this.changeCar();

    }

    changeCar(){
      for ( this.i = 0; this.i < Cars.length; this.i++) {
        if ( Cars[this.i].grupa === this.grupa || this.grupa === 'all') {
          this.visibleCars.push(Cars[this.i]);
        }
      }
      console.log(this.grupa);
      return this.visibleCars;

  }
}




