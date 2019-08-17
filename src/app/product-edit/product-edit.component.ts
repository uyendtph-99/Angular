import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { Router } from '@angular/router';
import { Category } from '../Category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  cates: Category[];
  constructor(
    private productService: ProductService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProduct();
    this.getCate();
  }
  getCate(){
    this.productService.getCates().subscribe(data =>{
      this.cates = data;
    })
  }
  getProduct(){
    this.routes.params.subscribe(param => {
      this.productService.getProductDetail(param.cateId,param.id).subscribe(data => {
        //console.log(data);
        this.product = data;
      })
    })
  }
  
  saveProduct(){
    this.productService.saveProduct(this.product,this.product.cateId,this.product.id).subscribe(data => {
      //console.log(data);
      this.router.navigateByUrl(`/category/${data.cateId}`)
    })
  }
}
