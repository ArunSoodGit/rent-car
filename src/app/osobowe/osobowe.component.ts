import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-osobowe',
  templateUrl: './osobowe.component.html',
  styleUrls: ['./osobowe.component.scss']
})
export class OsoboweComponent implements OnInit {
  @Input()
label: string;
label2: string;
label3: string;
label4: string;
label5: string;
label1: string;


  constructor() { }




  ngOnInit() {
  }

}
