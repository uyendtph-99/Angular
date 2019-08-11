import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../Category';
import { Product } from '../Product';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: ProductService,
    private routes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.routes.params.subscribe(param => {
      this.productService.getProducts(param.cateId).subscribe(data => {
        this.products = data;
      })
    })
  }
}
