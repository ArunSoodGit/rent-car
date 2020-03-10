import {Component, Inject, Input, OnInit} from '@angular/core';
import Customer from '../models/customer';
import {CustomersService} from '../services/customers.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import Car from '../models/car';
import {ActivatedRoute} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customer = new Customer();
  customersList: Customer[] = [];

  constructor(private customerService: CustomersService, private snackBar: MatSnackBar, private route: ActivatedRoute,
              public dialogRef: MatDialogRef<EditCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Customer) {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  ngOnInit(): void {

    // this.findCustomer(1);

  }


  onSubmit(customer) {
    console.log(customer);
    this.customerService.updateCustomer(customer.key, customer);
    this.snackBar.open('Employee update successful', 'OK', {
      duration: 2000,
    });
    this.dialogRef.close();
  }

}
