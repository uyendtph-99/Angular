import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ProductService} from '../services/product.service';
import { isNgTemplate } from '@angular/compiler';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  products : Product[];
  //selectedProduct:Product;
  constructor(
    private productService: ProductService
  ) { }
  
  ngOnInit() {
    this.getPro();
  }
  getPro(){
    this.productService.getProduct().subscribe(data => {
      //console.log(data);
      this.products = data;
    });
  }
  // removeProduct(product){
  //   this.productService.deleteProduct(product.cateId,product.id).subscribe(data=> {
  //     console.log(data);
  //     this.products = this.products.filter(item => item.id != data.id);
  //   })
  // }

}
