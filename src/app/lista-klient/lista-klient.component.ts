import {Component, OnInit, ViewChild} from '@angular/core';

import {Router} from '@angular/router';
import {CustomersService} from '../services/customers.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {NewCustomerComponent} from '../new-customer/new-customer.component';

@Component({
  selector: 'app-lista-klient',
  templateUrl: './lista-klient.component.html',
  styleUrls: ['./lista-klient.component.scss']
})
export class ListaKlientComponent implements OnInit {
  displayedColumns: string[] = ['imię', 'nazwisko', 'email', 'nrTelefonu', 'pesel', 'nrPrawaJazdy', 'kraj', 'miasto', 'ulica', 'nrBudynku', 'nrLokalu' ];

  dataSource;

  searchKey: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private customerService: CustomersService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  customerDetail(i: number) {
    console.log(i);
  }
  onCreate() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(NewCustomerComponent, dialogConfig);
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter2();
  }
  applyFilter2() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
}
