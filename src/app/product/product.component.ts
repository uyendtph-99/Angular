import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
import { isNgTemplate } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../Category';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  cates: Category[];
  products: Product[];
  constructor(
    private productService: ProductService,
    private routes: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.routes.params.subscribe(param => {
      this.productService.getProducts(param.cateId).subscribe(data => {
        //console.log(data);
        this.products = data;
      })
    })
    
  }

}
