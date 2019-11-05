import {Injectable } from '@angular/core';
import { Cars, CarsA, CarsB, CarsC, CarsD } from 'src/app/cars';

@Injectable()
export class ImageService {




visibleImages = [];
getImages() {
  return this.visibleImages = Cars.slice(0);
}
getImagesA() {
  return this.visibleImages = CarsA.slice(0);
}
getImagesB() {
  return this.visibleImages = CarsB.slice(0);
}
getImagesC() {
  return this.visibleImages = CarsC.slice(0);
}
getImagesD() {
  return this.visibleImages = CarsD.slice(0);
}
getImage(id: number) {
  return Cars.slice(0).find(car => car.id === id );

}
}






