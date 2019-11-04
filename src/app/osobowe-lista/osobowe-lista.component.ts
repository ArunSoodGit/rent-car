import { Component, OnInit, OnChanges } from '@angular/core';
import { Car } from '../car';
import { Cars } from '../cars';
import { ImageService } from '../image/shared/image.service';
@Component({
  selector: 'app-osobowe-lista',
  templateUrl: './osobowe-lista.component.html',
  styleUrls: ['./osobowe-lista.component.scss']
})
export class OsoboweListaComponent  {

  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {

    this.visibleImages = this.imageService.getImages();
   }



}
