import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { product } from '../service/product';
import { CartsService } from '../service/carts.service';
import { Router } from '@angular/router';
import { carts } from '../service/cart';
import Swal from 'sweetalert2';
import { FavService } from '../service/fav.service';
import { order } from '../service/order';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrl: './viewproducts.component.css'
})
export class ViewproductsComponent {
  productlist:product[]=[];
  constructor(private service:ProductsService,private cart:CartsService,private route:Router, private fav:FavService){}
  totalprice:any;

  
  ngOnInit(){
    this.service.getproduct().subscribe((res:any)=>{
      this.productlist=res;
    })
  }

  

  details(pid:any){
    this.route.navigateByUrl('/user/details/'+pid)
  }
  addtofavorite(fa:any){
    this.fav.addtofav(fa)

    Swal.fire({
      title:"Good Job !",
      text:"Product added to favorite",
      icon:'success'
 
    })
    
    this.route.navigateByUrl('/user/fav')
  }
  cartitems:carts[]=[];
  additems(pr:carts){
    this.cart.addtocart(pr);

    Swal.fire({
      title:"Good Job !",
      text:"Product added to cart",
      icon:'success'
    })
    this.route.navigateByUrl('/user/cart')
  }


  }


  
  


