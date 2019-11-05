import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-osobowe-lista-c',
  templateUrl: './osobowe-lista-c.component.html',
  styleUrls: ['./osobowe-lista-c.component.scss']
})
export class OsoboweListaCComponent  {

  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {

    this.visibleImages = this.imageService.getImagesC();
   }

}
