import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../Product';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../Category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 // @Input('data') products : Product[];
  //id='0';
  product: Product = new Product();
  cates:Category[];
  constructor(
    private productService: ProductService,
    private routes : ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.getCate();
  }
  
  getCate(){
    this.productService.getCates().subscribe(data =>{
      this.cates = data;
    })
  }
  addProduct(){
    this.routes.params.subscribe(param => {
      this.productService.addProduct(this.product,param.cateId).subscribe(data =>{
        console.log(data);
        this.router.navigateByUrl(`/category/` );
      });
    })
  }
}
