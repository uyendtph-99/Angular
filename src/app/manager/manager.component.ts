import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ProductService} from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
   //cateId = '0';
  products : Product[];
  constructor(
    private productService: ProductService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.getPro();
    this.getProducts();
  }
  getPro(){
    this.productService.getProduct().subscribe(data => {
      //console.log(data);
      this.products = data;
    });
  }
  getProducts(){
     ;
    this.routes.params.subscribe(param => {
      this.productService.getProducts(param.cateId).subscribe(data => {
        this.products = data;
      })
    })
    // this.cateId = this.routes.snapshot.paramMap.get('cateId') ;
		// 	this.productService.getProducts( this.cateId)
		// 	.subscribe(data => {
    //     console.log(data);
    //     this.products = data;
		// 	})
  }
  removeProduct(product){
    this.productService.deleteProduct(product.id).subscribe( data =>{
      //console.log(data);
      this.products = this.products.filter(item => item.id != data.id)
    })
  }
  
}
