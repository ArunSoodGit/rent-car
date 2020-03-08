import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OsoboweComponent } from './osobowe/osobowe.component';
import { OsoboweListaComponent } from './osobowe-lista/osobowe-lista.component';
import { RezerwacjaComponent } from './rezerwacja/rezerwacja.component';
import { HomeComponent } from './home/home.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { LoginComponent } from './login/login.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { ListaKlientComponent } from './lista-klient/lista-klient.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { NewCarComponent } from './new-car/new-car.component';
import { LayoutComponent } from './layout/layout.component';


import { CarService } from './services/car.service';
import { CustomersService } from './services/customers.service';
import { LoginService } from './services/login.service';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule} from '@angular/material/dialog';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OsoboweComponent,
    OsoboweListaComponent,
    RezerwacjaComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    CarDetailComponent,
    LoginComponent,
    ListaKlientComponent,
    NewCustomerComponent,
    NewCarComponent,
    EditCustomerComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatSnackBarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSortModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatStepperModule,
    MatGridListModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    AngularFireAuthModule,
    AngularFireModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    AngularFireDatabaseModule,
  ],
  providers: [CarService, CustomersService, LoginService],
  bootstrap: [AppComponent],
  entryComponents: [NewCustomerComponent, EditCustomerComponent]

})
export class AppModule { }
