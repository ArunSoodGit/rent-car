import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { OsoboweComponent } from './osobowe/osobowe.component';
import { RezerwacjaComponent } from './rezerwacja/rezerwacja.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { UstawieniaComponent } from './ustawienia/ustawienia.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
},
{
  path: 'rezerwacja',
  component: RezerwacjaComponent
},
{
  path: 'ustawienia',
  component: UstawieniaComponent
},
{
  path: 'osobowe',
  component: OsoboweComponent
},
{
  path: 'car/:id',
  component: CarDetailComponent
},

{
  path: 'kontakt',
  component: KontaktComponent
},
{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent,

},

{
   path: 'register', component: RegisterComponent,
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
