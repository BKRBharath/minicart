import { Component } from '@angular/core';
import { CartsService } from '../service/carts.service';
import { Router } from '@angular/router';
import { FavService } from '../service/fav.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  constructor(private cart:CartsService,private route:Router,private fav:FavService){}
  cartlen:any;
  favlen:any;
  ngDoCheck(){
    this.cartlen=this.cart.getcartlength();
    this.favlen=this.fav.getfavlen();
  }
  
  checkuser:any;
  ngOnInit(){
    if(localStorage.getItem('loggedinuser')!=null){
      this.checkuser=localStorage.getItem('loggedinuser')
      this.checkuser=JSON.parse(this.checkuser)
    }
    else{
      this.route.navigateByUrl('/')
    }
  }

  logout(){
    localStorage.removeItem('user')
    this.route.navigateByUrl('/')
  }

}
