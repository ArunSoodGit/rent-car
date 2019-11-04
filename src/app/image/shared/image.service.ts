import {Injectable } from '@angular/core';
import { Cars } from 'src/app/cars';

@Injectable()
export class ImageService {




visibleImages = [];
getImages() {
  return this.visibleImages = Cars.slice(0);
}

getImage(id: number) {
  return Cars.slice(0).find(car => car.id === id );

}
}






