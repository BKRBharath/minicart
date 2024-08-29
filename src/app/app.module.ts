import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { AddoffersComponent } from './addoffers/addoffers.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AddtofavComponent } from './Favorites/addtofav.component';
import { ProfileComponent } from './profile/profile.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { LoginComponent } from './login/login.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ViewproductsComponent,
    ManageproductsComponent,
    AddoffersComponent,
    ViewordersComponent,
    HomeComponent,
    CartComponent,
    AddtofavComponent,
    ProfileComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    LoginComponent,
    AddproductsComponent,
    ProductdetailsComponent,
    UserhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButton,
    MatButtonModule,
    MatSelect,
    MatSelectModule,
    FormsModule,
    HttpClientModule
  
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
