import { Component, OnInit } from '@angular/core';



import Car from '../models/car';

import { ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car.service';
import customer from '../models/customer';



@Component({

  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  car: Car;
  user: firebase.User;
  carList: Car[] = [];

  constructor(public carService: CarService, private route: ActivatedRoute) {
  }

  ngOnInit() {


    this.findCar(+this.route.snapshot.params.id);


  }

  findCar(id: number) {

    this.carService.getCars().subscribe(cars => {
      this.carList = cars;

      return this.car = this.carList.slice(0).find(car => car.id === id);

    });
  }
}

