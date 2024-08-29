import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../service/products.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {
  productForm:FormGroup=new FormGroup({})
  constructor(private route:Router, private fb:FormBuilder,private service:ProductsService){
    this.productForm=this.fb.group({
      id:['',Validators.required],
      title:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
      category:['',Validators.required],
      image:['',Validators.required]
    })

  }
  addme(){
    console.log(this.productForm.value);
      this.service.addproducts(this.productForm.value);
      
    // Swal.fire({
    //   title:"Good !",
    //   text:res,
    //   icon:'success'
    // });


    this.route.navigateByUrl('/admin/products')

  }
 

  

}
