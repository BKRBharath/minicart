import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../service/product';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private product:ProductsService){}
  totalprice:any;
  len:any;
  ngOnInit(){
    this.totalprice=this.product.gettotalprice();
    this.len=this.product.productlength();
    
    
    }
  }
 

  

  
  



