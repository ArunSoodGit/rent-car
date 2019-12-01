import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Car from '../car';
import { CarService } from '../car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rezerwacja',
  templateUrl: './rezerwacja.component.html',
  styleUrls: ['./rezerwacja.component.scss']
})
export class RezerwacjaComponent implements OnInit {
  car: Car;
  carList: Car[] = [];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor(public carService: CarService, private route: ActivatedRoute, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.findCar(+this.route.snapshot.params.id);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


  findCar(id: number) {
    this.carService.getCars().subscribe(cars => {
      this.carList = cars;
      return this.car = this.carList.slice(0).find(car => car.id === id);
    });
  }
}
