import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { product } from '../service/product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  productlist:product[]=[];
  constructor(private bs:ActivatedRoute,private service:ProductsService){}
  pid:any;
  p:any;
  ngOnInit(){
    this.pid=this.bs.snapshot.paramMap.get('id');
    this.p=this.service.getproductbyid(this.pid);
  }

}
