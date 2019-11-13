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
import {MatMenuModule} from '@angular/material/menu';
import { OsoboweComponent } from './osobowe/osobowe.component';
import { OsoboweListaComponent } from './osobowe-lista/osobowe-lista.component';
import { RezerwacjaComponent } from './rezerwacja/rezerwacja.component';
import { KontaktComponent } from './kontakt/kontakt.component';

import { UstawieniaComponent } from './ustawienia/ustawienia.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LayoutComponent } from './layout/layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { CarDetailComponent } from './car-detail/car-detail.component';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { UserComponent } from './user/user.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CarService } from './car.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OsoboweComponent,
    OsoboweListaComponent,
    RezerwacjaComponent,
    KontaktComponent,
    UserComponent,

    RegisterComponent,
    UstawieniaComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    CarDetailComponent,
    FooterComponent,
    LoginComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
