import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  @Output('keyAddress') onHanleAddress = new EventEmitter<string>();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }
  addProduct(){
    this.productService.addProduct(this.product)
  }

}
