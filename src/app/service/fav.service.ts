import { Injectable } from '@angular/core';
import { carts } from './cart';
import { order } from './order';
import { fav } from './fav';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  favorite:fav[]=[];

  getfavs(){
    return of(this.favorite)
  }
  
  addtofav(fa:fav){
    this.favorite.push(fa)
  }
  getfavlen(){
    return this.favorite.length;
  }

  constructor() { }
}
