import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  constructor(private route:Router){}
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
    localStorage.removeItem('admin')
    this.route.navigateByUrl('/')
  }
 


}
