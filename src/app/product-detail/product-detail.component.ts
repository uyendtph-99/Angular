import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  //@Input() product: Product;
  product : Product;
  constructor( private productService: ProductService, 
      private routes : ActivatedRoute
    ) { }

  ngOnInit() {
    this.getProductDetail();
  }
  getProductDetail(){
  this.routes.params.subscribe(param =>{
    //console.log(param)
    this.productService.getProductDetail(param.cateId,param.id).subscribe( data =>{
      this.product = data;
    })
  }
    )
  }
}
