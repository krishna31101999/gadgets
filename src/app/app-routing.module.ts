import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './user/signin/signin.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DisplayComponent } from './shop/display/display.component';
import { MobileComponent } from './shop/mobile/mobile.component';
import { LaptopComponent } from './shop/laptop/laptop.component';









const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'cart',component:CartComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'user/signin',component:SigninComponent},
  {path:'shop/mobile',component:MobileComponent},
  {path:'shop/display',component:DisplayComponent},
  {path:'shop/laptop',component:LaptopComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
