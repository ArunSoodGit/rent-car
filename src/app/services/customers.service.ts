import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireObject, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs';
import Customer from '../models/customer';
import Car from '../models/car';
import {map} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customers: Observable<any[]>;
   itemsRef = this.db.list('customers');

  constructor(public db: AngularFireDatabase) {

    this.customers = this.db.list('customers').snapshotChanges().pipe(
      map(changes =>
        changes.map(
          c => ({key: c.payload.key, ...c.payload.val() as object})
        ))
    );
  }


  getCustomers() {
    return this.customers;
  }

  addCustomer(customer: Customer) {
   this.itemsRef.push(customer);
  }

  updateCustomer(key: string, customer: Customer){
    this.itemsRef.update(key, customer);
   // this.db.object('/customers/' + customer.key).update(customer);
  }

}

