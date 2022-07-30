import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product';

@Component({
  selector: 'app-cart-item-details',
  templateUrl: './cart-item-details.component.html',
  styleUrls: ['./cart-item-details.component.css']
})
export class CartItemDetailsComponent implements OnInit {
  // @Input() id:number=0;
  @Input() products:Set<Product>;
  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
 }

}