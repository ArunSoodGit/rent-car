import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-osobowe-lista-d',
  templateUrl: './osobowe-lista-d.component.html',
  styleUrls: ['./osobowe-lista-d.component.scss']
})
export class OsoboweListaDComponent {

  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {

    this.visibleImages = this.imageService.getImagesD();
   }


}
