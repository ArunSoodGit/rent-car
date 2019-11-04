import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import {ActivatedRoute} from '@angular/router';


@Component({

  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  car: any;


  constructor(private imageService: ImageService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.car = this.imageService.getImage(+this.route.snapshot.params['id']);
  }

}


