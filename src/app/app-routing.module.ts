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
import { TvComponent } from './shop/tv/tv.component';
import { HeadphonesComponent } from './shop/headphones/headphones.component';
import { CameraComponent } from './shop/camera/camera.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';












const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'cart',component:CartComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'user/signin',component:SigninComponent},
  {path:'shop/mobile',component:MobileComponent},
  {path:'shop/display',component:DisplayComponent},
  {path:'shop/laptop',component:LaptopComponent},
  {path:'shop/camera',component:CameraComponent},
  {path:'shop/tv',component:TvComponent},
  {path:'shop/headphones',component:HeadphonesComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent}
  // {path:'**',redirectTo:''}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
