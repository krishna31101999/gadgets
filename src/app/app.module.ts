import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './user/signin/signin.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ShopComponent } from './shop/shop.component';
import { MobileComponent } from './shop/mobile/mobile.component';
import { DisplayComponent } from './shop/display/display.component';
import { LaptopComponent } from './shop/laptop/laptop.component';
import { TvComponent } from './shop/tv/tv.component';
import { HeadphonesComponent } from './shop/headphones/headphones.component';
import { CameraComponent } from './shop/camera/camera.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SigninComponent,
    UserComponent,
    CartComponent,
    AboutusComponent,
    ShopComponent,
    MobileComponent,
    DisplayComponent,
    LaptopComponent,
    TvComponent,
    HeadphonesComponent,
    CameraComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
