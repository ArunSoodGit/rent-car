import { Injectable, Input } from '@angular/core';
import Car from './car';

import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})


export class CarService {
  @Input() grupa;


  cars: Observable<Car[]>;

  constructor(public db: AngularFireDatabase) {
    this.cars = this.db.list('cars').snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  getCars() {
    return this.cars;

  }
  createCars(car: Car) {
    const itemsRef = this.db.list('cars');
    itemsRef.push(car);

  }
  getCar(id: number): Observable<Car>{
    const car = this.db.list
    console.log(this.cars[id]);
    return this.cars[id];
  }


}
