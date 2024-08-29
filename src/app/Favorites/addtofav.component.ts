import { Component } from '@angular/core';
import { FavService } from '../service/fav.service';
import { fav } from '../service/fav';

@Component({
  selector: 'app-addtofav',
  templateUrl: './addtofav.component.html',
  styleUrl: './addtofav.component.css'
})
export class AddtofavComponent {
  favorite:fav[]=[];
  constructor(private fav:FavService){}
  ngOnInit(){
    this.fav.getfavs().subscribe((data:any)=>{
    this.favorite=data;
})
    }
  }

