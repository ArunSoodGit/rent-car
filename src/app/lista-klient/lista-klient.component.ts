import {Component, OnInit, ViewChild} from '@angular/core';

import {Router} from '@angular/router';
import {CustomersService} from '../customers.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-lista-klient',
  templateUrl: './lista-klient.component.html',
  styleUrls: ['./lista-klient.component.scss']
})
export class ListaKlientComponent implements OnInit {
  displayedColumns: string[] = [

    'imię',
    'nazwisko',
    'email',
    'nrTelefonu',
    'pesel',
    'nrPrawaJazdy',
    'kraj',
    'miasto',
    'ulica',
    'nrBudynku',
    'nrLokalu'

  ];

  dataSource;
  //color = 'lightgrey';

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private customerService: CustomersService, private router: Router) {
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
  customerDetail(i: number){
    console.log(i);
  }
}
