import { Component, OnInit } from '@angular/core';
import {Product} from '../Product'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: string= 'Product new';
  Product: Product= {
    name: "Tivi",
    desc: "Tivi mới về",
    img: "https://cdn.tgdd.vn/Products/Images/1942/164546/tivi-lg-49uk7500pta-25-550x340.jpg",
    price: 23000000,
    status: true
  }

  constructor() { }
  
  ngOnInit() {
  }
  onClickMe = event => {
    this.title = "Tivi sony";
  }
  handleKeyUp = event => {
    this.Product.name = event.target.value;
  }
}
