import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-osobowe-lista-b',
  templateUrl: './osobowe-lista-b.component.html',
  styleUrls: ['./osobowe-lista-b.component.scss']
})
export class OsoboweListaBComponent  {

  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {

    this.visibleImages = this.imageService.getImagesB();
   }


}
