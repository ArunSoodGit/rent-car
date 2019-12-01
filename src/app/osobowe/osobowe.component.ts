import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../car.service';
import { AngularFireList } from 'angularfire2/database';
import Car from '../car';

@Component({
  selector: 'app-osobowe',
  templateUrl: './osobowe.component.html',
  styleUrls: ['./osobowe.component.scss']
})
export class OsoboweComponent {
  grupa;
  grupaLista = 'all';
  grupaListaA = 'A';
  grupaListaB = 'B';
  grupaListaC = 'C';
  grupaListaD = 'D';
  itemsRef: AngularFireList<any>;

  constructor(public carService: CarService) { }

}
