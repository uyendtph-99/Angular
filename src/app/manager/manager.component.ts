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
   //cateId = '0';
  product: Product = new Product();
  products : Product[];
  cates: Category[];
  constructor(
    private productService: ProductService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.getProducts();
  }
  
  getProducts(){
    this.routes.params.subscribe(param => {
      this.productService.getProducts(param.cateId).subscribe(data => {
        console.log(data);
        this.products = data;
      })
    })
    
  }
  addProduct(){
    this.routes.params.subscribe(param => {
      this.productService.addProduct(this.product,param.cateId).subscribe(data =>{
        //console.log(data);
        this.router.navigateByUrl(`/category/${data.cateId}`);
      });
    })
  }
  removeProduct(product){
    this.productService.deleteProduct(product.id,product.cateId).subscribe(data=> {
     // console.log(data);
      this.products = this.products.filter(item => item.id != data.id);
    })
  }
  
}
