import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BOComponent} from './bo/bo.component';
import {AddHotelComponent} from './add-hotel/add-hotel.component';
import {AuthComponent} from './auth/auth.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {Notfound404Component} from './notfound404/notfound404.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'bo', component: BOComponent},
  {path: 'add', component: AddHotelComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: '404', component: Notfound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
