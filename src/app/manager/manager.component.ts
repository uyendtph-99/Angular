import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ProductService} from '../services/product.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  products : Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getPro();
  }
  getPro(){
    this.productService.getProducts().subscribe(data => {
      //console.log(data);
      this.products = data;
    });
  }
  removeProduct(product){
    this.productService.deleteProduct(product.id).subscribe( data =>{
      //console.log(data);
      this.products = this.products.filter(item => item.id != data.id)
    })
  }
  
}
