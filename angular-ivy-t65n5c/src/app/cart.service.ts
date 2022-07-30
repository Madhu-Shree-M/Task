import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carts } from './carts';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _http:HttpClient) {}

  getAllCartDetails=():Observable<Carts>=>{
    const url = "https://dummyjson.com/carts";
    return this._http.get<Carts>(url);
  }
}
