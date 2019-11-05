import {Injectable } from '@angular/core';
import { Cars,  } from 'src/app/cars';
import { Car } from 'rent-car/src/app/car';

@Injectable()
export class ImageService {




visibleImages = [];
visibleCars: Car[];

i: number;

getCars(grupa: string ) {
  this.visibleCars = [];
  for ( this.i = 0; this.i < Cars.length; this.i++) {
    if ( Cars[this.i].grupa === grupa) {
      this.visibleCars.push(Cars[this.i]);
    }
  }
  return this.visibleCars;

}
getImages() {
  return this.visibleImages = Cars.slice(0);
}

getImage(id: number) {
  return Cars.slice(0).find(car => car.id === id );

}
}






