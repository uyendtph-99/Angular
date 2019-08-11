import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../Product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  //@Input('data') products : Product[];
  //id='0';
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private routes : ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
  }
  addProduct(){
    this.routes.params.subscribe(param => {
      this.productService.addProduct(this.product,param.id).subscribe(data =>{
        this.router.navigateByUrl('/category/'+ param.id);
      });
    })
    // this.id = this.routes.snapshot.paramMap.get('id') ;
		// 	this.productService.addProduct(this.product, this.id)
		// 	.subscribe(data => {
		// 		console.log(data);
    //     this.router.navigateByUrl('/category/'+ this.id);
		// 	})
  }

}
