import { Component, OnInit } from '@angular/core';



import { getLocaleEraNames } from '@angular/common';
import Car from '../car';
import { Cars } from '../cars';
import { ActivatedRoute } from '@angular/router';



@Component({

  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  car: Car;


  i: number;



  constructor(  private route: ActivatedRoute) {


   }

  ngOnInit() {

    this.car = this.findCar(+this.route.snapshot.params['id']);

}

  findCar(id: number) {
    return Cars.slice(0).find(car => car.id === id );
  }


}

