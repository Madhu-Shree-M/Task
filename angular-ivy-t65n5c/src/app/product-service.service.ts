import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {

  constructor(private _http:HttpClient) { }
    getProductById=(id:number):Observable<Product>=>{
        const url="https://dummyjson.com/products";
        return this._http.get<Product>(`${url}/${id}`);
    }
}