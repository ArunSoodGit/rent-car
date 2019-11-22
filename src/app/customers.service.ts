import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireObject, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import Customer from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customers: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.customers = this.db.list('customers').valueChanges();


   }
getCustomers() {


  return this.customers;

}

  }

