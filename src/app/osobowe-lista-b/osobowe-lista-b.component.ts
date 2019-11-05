import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-osobowe-lista-b',
  templateUrl: './osobowe-lista-b.component.html',
  styleUrls: ['./osobowe-lista-b.component.scss']
})
export class OsoboweListaBComponent  {


  cars: any[]=[];
  grupa = 'B';

  constructor(private imageService: ImageService) {

    this.cars = this.imageService.getCars(this.grupa);
   }


}
