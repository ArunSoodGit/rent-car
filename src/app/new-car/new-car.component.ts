import { Component, OnInit } from '@angular/core';
import Customer from '../models/customer';
import {CustomersService} from '../services/customers.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {
  customer = new Customer();

  constructor(private service: CustomersService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onSubmit(customer: Customer) {
    console.log(customer);
    this.service.saveCustomer(customer)
    this.snackBar.open('Employee added successful', 'OK', {
      duration: 2000,
    });
  }
}
