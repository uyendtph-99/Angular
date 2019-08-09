import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getproduct();
  }
  getproduct() {
    this.routes.params.subscribe(param => {
      //console.log(param)
      this.productService.getProductDetail(param.id).subscribe(data => {
        this.product = data;
      })
    }
    )
  }
  saveProduct() {
    this.productService.saveProduct(this.product).subscribe(data => {
      this.router.navigateByUrl("/manager");
    })
  }
}
