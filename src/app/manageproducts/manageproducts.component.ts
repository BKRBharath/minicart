import { Component } from '@angular/core';
import { product } from '../service/product';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrl: './manageproducts.component.css'
})
export class ManageproductsComponent {
  ngOnInit(){
    this.service.getproduct().subscribe((res:any)=>{
      this.productlist=res;
    })
  }
 productlist:any;
  constructor(private service:ProductsService){}
  deleteme(pid:any){
    let res=this.service.deleteproduct(pid)
    alert(res);
  }

  editcontent(p:any){
    p.pflag=true;

  }
  newp:any;
  updateproduct(p:any){
    p.pflag=false;
    // this.newp={
    //   id:p.id,
    //   title:p.title,
    //   price:p.price,
    //   description:p.description,
    //   category:p.category,
    //   image:p.image,
    //   pflag:p.false,

    // }
    // this.service.update(p.id).subscribe((res)=>{
    //   alert(res)
    let res=this.service.update(p.id)
    alert(res);
    
  }



}