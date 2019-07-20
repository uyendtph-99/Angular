import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import { Data } from '../data';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  products = Data;
  selectedProduct:Product;
  constructor() { }
  
  ngOnInit() {
  }
  detailProduct(product){
    this.selectedProduct = product;
  }
  removeProduct(product){
    this.products = this.products.filter(item => item.id != product.id)
  }

}
