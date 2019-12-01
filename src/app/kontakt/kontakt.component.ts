import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { map } from 'rxjs/operators';
import Customer from '../customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {


  constructor(public customerService: CustomersService) {

  }
  customersList: Customer[];

  ngOnInit() {

    this.customerService.getCustomers().subscribe(customers => {
      this.customersList = customers;
      console.log(customers);
    }
    );


  }




}

