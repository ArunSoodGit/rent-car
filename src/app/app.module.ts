import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
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
import { LogowanieComponent } from './logowanie/logowanie.component';
import { UstawieniaComponent } from './ustawienia/ustawienia.component';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    OsoboweComponent,
    OsoboweListaComponent,
    RezerwacjaComponent,
    KontaktComponent,
    LogowanieComponent,
    UstawieniaComponent
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
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
