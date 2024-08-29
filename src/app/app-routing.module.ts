import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HomeComponent } from './home/home.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CartComponent } from './cart/cart.component';
import { AddtofavComponent } from './Favorites/addtofav.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'products',component:ProductsComponent},
      {path:'manage',component:ManageproductsComponent},
      {path:'add',component:AddproductsComponent},
      {path:'orders',component:ViewordersComponent}

    ]
  },
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'userhome',component:UserhomeComponent},
      {path:'viewproducts',component:ViewproductsComponent},
      {path:'cart',component:CartComponent},
      {path:'fav',component:AddtofavComponent},
      {path:'orders',component:ViewordersComponent},
      {path:'details/:id', component:ProductdetailsComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
