import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product';
import { ProductServiceService } from '../../product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:number;
  product:Product;
  constructor(private _activatedRoute:ActivatedRoute, private _productService:ProductServiceService) { }

  ngOnInit() {

    this._activatedRoute.paramMap.subscribe((map)=>{
      let p=map.get('id');
        this.productId=parseInt(p);
    })

    this._productService.getProductById(this.productId).subscribe({
      next:(data)=>this.product=data
    })
  }

}