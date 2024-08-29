import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { product } from '../service/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productlist:product[]=[];
  constructor(private route:Router,private service:ProductsService){}
  ngOnInit(){
    this.service.getproduct().subscribe((res:any)=>{
      this.productlist=res;
    })
    
  }

}
