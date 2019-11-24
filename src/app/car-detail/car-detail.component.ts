import { Component, OnInit } from '@angular/core';



import Car from '../car';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from '../car.service';
import { LoginService } from '../login.service';
import { Cars } from '../cars';



@Component({

  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  car: Car;
  user: firebase.User;
  i: number;
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

