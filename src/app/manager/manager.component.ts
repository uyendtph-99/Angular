import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ProductService} from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../Category';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  product: Product = new Product();
  products : Product[];
  cates: Category;
  constructor(
    private productService: ProductService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.getProducts();
    this.getCategory();
  }
  getCategory(){
    this.routes.params.subscribe(param => {
      console.log(param);
      this.productService.getCategory(param.cateId).subscribe(data => {
        this.cates = data;
      })
    })
  }
  getProducts(){
    this.routes.params.subscribe(param => {
      this.productService.getProducts(param.cateId).subscribe(data => {
        //console.log(data);
        this.products = data;
      })
    })
    
  }
  addProduct(){
    this.routes.params.subscribe(param => {
      this.productService.addProduct(this.product,param.cateId).subscribe(data =>{
        this.products.push(data);
        console.log(data);
      });
    })
  }
  removeProduct(product){
    this.productService.deleteProduct(product.id,product.cateId).subscribe(data=> {
      console.log(data);
      this.products = this.products.filter(item => item.id != data.id);
    })
  }
  
}
