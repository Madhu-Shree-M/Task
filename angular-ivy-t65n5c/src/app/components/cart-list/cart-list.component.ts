import { Component, OnInit } from '@angular/core';
import { Cart } from '../../cart';
import { CartService } from '../../cart.service';
import { Carts } from '../../carts';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartList:Carts={
    carts: new Set(),
    limit:0,
    skip:0,
    total:0
  }
  viewDetails:boolean=false;
  constructor(private _cartService:CartService) { }

  ngOnInit() {
    this._cartService.getAllCartDetails().subscribe({
      next:(data)=>{this.cartList=data;
        console.log(data);
      }
    })

  }
  clicked=()=>{
return this.viewDetails=true;
  }
}