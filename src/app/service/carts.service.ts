import { Injectable } from '@angular/core';
import { product } from './product';
import { carts } from './cart';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  cartitems:carts[]=[];

  constructor() { }

  addtocart(pro:any){
    let ind=this.cartitems.findIndex(p=>p.id==pro.id);
    if(ind==-1){

      this.cartitems.push(pro);
      return "added succesfully"
    }
    else{
      return "already existed"
    }

  }
  getitems(){
    return of(this.cartitems);
  }

  getcartlength(){
    return this.cartitems.length;
  }
  // addtoorder(ord:any){
  //   this.cartitems.push(ord)
  // }
}

