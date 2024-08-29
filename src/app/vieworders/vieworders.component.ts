import { Component } from '@angular/core';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrl: './vieworders.component.css'
})
export class ViewordersComponent {
  constructor(private order:OrdersService){}
  allorders:any;
  ngOnInit(){
    this.order.getorders().subscribe((res)=>{
      this.allorders=res;
    })
  }

}
