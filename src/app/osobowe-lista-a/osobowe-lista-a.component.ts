import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-osobowe-lista-a',
  templateUrl: './osobowe-lista-a.component.html',
  styleUrls: ['./osobowe-lista-a.component.scss']
})
export class OsoboweListaAComponent  {


  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {

    this.visibleImages = this.imageService.getImagesA();
   }

}
