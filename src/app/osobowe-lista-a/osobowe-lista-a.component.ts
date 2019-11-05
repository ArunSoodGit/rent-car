import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import { Car } from 'rent-car/src/app/car';

@Component({
  selector: 'app-osobowe-lista-a',
  templateUrl: './osobowe-lista-a.component.html',
  styleUrls: ['./osobowe-lista-a.component.scss']
})
export class OsoboweListaAComponent  {


  cars: any[] = [];
 grupa = 'A';

  constructor(private imageService: ImageService) {


    this.cars = this.imageService.getCars(this.grupa);
   }

}
