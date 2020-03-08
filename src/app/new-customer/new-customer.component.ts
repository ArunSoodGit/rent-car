import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../services/customers.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Customer from '../models/customer';

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
      this.service.addCustomer(customer);
      console.log(customer);
      this.snackBar.open('Employee added successful', 'OK', {
        duration: 2000,
      });
    }

}
