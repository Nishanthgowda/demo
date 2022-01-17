import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menuclass } from '../models/menuclass';
import { Vegpizza } from '../models/vegpizza';
import { Cart } from '../models/cart';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(public http:HttpClient) { }

  formdata!:Cart;

  readonly url= "http://localhost:5298/api";
  
  getMenuList():Observable<Menuclass[]>
  {
      return this.http.get<Menuclass[]>(this.url+"/Pizzas");
  }

  getVegpizzalist():Observable<Vegpizza[]>
  {
    return this.http.get<Vegpizza[]>(this.url+"/VegPizzas");
  }

  getnVegpizzalist():Observable<Vegpizza[]>
  {
    return this.http.get<Vegpizza[]>(this.url+"/NonvegPizzas");
  }

  postcart(cart:Vegpizza)
  {
    return this.http.post(this.url+"/Carts",cart);
  }

  getcart():Observable<Cart[]>
  {
    return this.http.get<Cart[]>(this.url+"/Carts")
  }

  deleteItemCart(id:number)
  {
    return this.http.delete(this.url+"/Carts/"+id);
  }

}
