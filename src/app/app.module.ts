import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { OsoboweComponent } from './osobowe/osobowe.component';
import { OsoboweListaComponent } from './osobowe-lista/osobowe-lista.component';
import { RezerwacjaComponent } from './rezerwacja/rezerwacja.component';

import { MatTabsModule } from '@angular/material/tabs';
import { LayoutComponent } from './layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { UserComponent } from './user/user.component';
import { MatStepperModule } from '@angular/material/stepper';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CarService } from './car.service';
import { CustomersService } from './customers.service';
import { LoginService } from './login.service';
import {MatInputModule,  MatPaginatorModule, MatSortModule} from '@angular/material';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ScheduleModule, TimelineMonthService, DayService, WeekService, WorkWeekService,
  MonthService, AgendaService, MonthAgendaService, TimelineViewsService } from '@syncfusion/ej2-angular-schedule';




import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ListaKlientComponent } from './lista-klient/lista-klient.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OsoboweComponent,
    OsoboweListaComponent,
    RezerwacjaComponent,
    UserComponent,

    RegisterComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    CarDetailComponent,
    FooterComponent,
    LoginComponent,
    ListaKlientComponent,
    NewCustomerComponent,




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
    ScheduleModule,
    ButtonModule,
    MatPaginatorModule,


  ],
  providers: [CarService,
    CustomersService,
    LoginService, DayService,
    WeekService, WorkWeekService,
    MonthService, AgendaService, MonthAgendaService,
     TimelineViewsService, TimelineMonthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
