import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { OsoboweComponent } from './osobowe/osobowe.component';
import { RezerwacjaComponent } from './rezerwacja/rezerwacja.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { LoginComponent } from './login/login.component';
import { ListaKlientComponent } from './lista-klient/lista-klient.component';
import {NewCustomerComponent} from './new-customer/new-customer.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import {WykresComponent} from './wykres/wykres.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
},

{
  path: 'osobowe',
  component: OsoboweComponent
},
  {
    path: 'wykres',
    component: WykresComponent
  },
{
  path: 'car/:id',
  component: CarDetailComponent
},
  {
    path: 'customer/:id',
    component: EditCustomerComponent
  },
{
  path: 'rezerwacja',
  component: RezerwacjaComponent
},

{
  path: 'lista-klient',
  component: ListaKlientComponent
},

{
  path: 'login',
  component: LoginComponent,

},
  {
    path: 'new-customer',
    component: NewCustomerComponent,

  },


{
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
