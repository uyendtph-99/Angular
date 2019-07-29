import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import { Data } from '../data';
import {ProductService} from '../services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  products : Product[];
  selectedProduct:Product;
  constructor(
    private productService: ProductService
  ) { }
  
  ngOnInit() {
    this.getPro();
  }
  getPro(){
    this.products = this.productService.getProducts();
  }
  detailProduct(product){
    this.selectedProduct = product;
  }
  removeProduct(product){
    this.products = this.products.filter(item => item.id != product.id)
  }

}
