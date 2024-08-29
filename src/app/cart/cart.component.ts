import { Component } from '@angular/core';
import { carts } from '../service/cart';
import { CartsService } from '../service/carts.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  serviceForm:FormGroup=new FormGroup({});

    constructor(private route:Router,private fb:FormBuilder , private cart:CartsService, private orderr:OrdersService){
      this.serviceForm=this.fb.group({
        id:['',Validators.required],
        title:['',Validators.required],
        price:['',Validators.required],
        description:['',Validators.required],
        Category:['',Validators.required],
        image:['',Validators.required],
        address:['',Validators.required]

      })
    }


    cartitems: carts[]=[];
    

    ngOnInit(){
      this.cart.getitems().subscribe((data:any)=>{
        this.cartitems=data;
      });
    }

    order(ord:any){
      this.orderr.addneworder(ord)
      
      Swal.fire({
        title:'Done',
        text:"Ordered Successfully",
        icon:'success'
      })

      this.route.navigateByUrl('/user/orders')
    }
  

}
