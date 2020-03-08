import {Component, OnInit, ViewChild} from '@angular/core';

import {Router} from '@angular/router';
import {CustomersService} from '../services/customers.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {NewCustomerComponent} from '../new-customer/new-customer.component';
import {EditCustomerComponent} from '../edit-customer/edit-customer.component';
import customer from '../models/customer';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-lista-klient',
  templateUrl: './lista-klient.component.html',
  styleUrls: ['./lista-klient.component.scss']
})
export class ListaKlientComponent implements OnInit {
  displayedColumns: string[] = ['imię', 'nazwisko', 'email', 'nrTelefonu', 'pesel', 'nrPrawaJazdy', 'kraj', 'miasto', 'ulica', 'nrBudynku', 'nrLokalu' ,'edit'];

  dataSource;
   customer;
  searchKey: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private customerService: CustomersService, private router: Router, private dialog: MatDialog) {
  }



  ngOnInit() {
    this.customerService.getCustomers().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onCreate() {
const dialogRef = this.dialog.open(NewCustomerComponent,{
  width: '700px'
});



  }
  onUpdate(customer) {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      width: '700px',
      data: customer
    });

    dialogRef.afterClosed().subscribe(result => {
      this.customer = customer;
    });
  }



  onSearchClear() {
    this.searchKey = '';
    this.applyFilter2();
  }
  applyFilter2() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
}
