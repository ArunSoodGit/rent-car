import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../customers.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Customer from '../customer';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
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
