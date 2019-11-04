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
import { LogowanieComponent } from './logowanie/logowanie.component';
import { UstawieniaComponent } from './ustawienia/ustawienia.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LayoutComponent } from './layout/layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ImageService } from './image/shared/image.service';
import { CarDetailComponent } from './car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OsoboweComponent,
    OsoboweListaComponent,
    RezerwacjaComponent,
    KontaktComponent,
    LogowanieComponent,
    UstawieniaComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    CarDetailComponent
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
    MatExpansionModule

  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
