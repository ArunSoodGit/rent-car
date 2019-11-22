import { Injectable, Input } from '@angular/core';
import Car from './car';
import { Cars } from './cars';
import {AngularFireDatabase, AngularFireObject, AngularFireList} from 'angularfire2/database';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})


export class CarService {
  @Input()grupa;

  cars: Observable<any[]>;

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
  createCars(car: Car){
    const itemsRef = this.db.list('cars');
    itemsRef.push( car );

  }


}
