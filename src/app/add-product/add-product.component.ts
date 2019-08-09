import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  //@Input('data') products : Product[];
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private router : Router
  ) { }

  ngOnInit() {
  }
  addProduct(){
    this.productService.addProduct(this.product).subscribe(data =>{
      this.router.navigateByUrl('/manager')
    });
  }

}
