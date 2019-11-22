import { Component, OnInit, OnChanges, Input } from '@angular/core';
import Car from '../car';
import { Cars } from '../cars';
import { CarService } from '../car.service';

@Component({
  selector: 'app-osobowe-lista',
  templateUrl: './osobowe-lista.component.html',
  styleUrls: ['./osobowe-lista.component.scss']
})
export class OsoboweListaComponent implements OnInit {

  @Input() grupa;

  visibleCars: Car[] = [];
  i: number;
  carList: Car[] = [];


  constructor(public carService: CarService) { }


  ngOnInit() {

    this.carService.getCars().subscribe(cars => {
      this.carList = cars;
    }
    );
  }

}







