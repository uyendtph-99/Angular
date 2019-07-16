import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import { Data } from '../data';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: string= 'Product new';
  products = Data;

  constructor() { }
  
  ngOnInit() {
  }
  onClickMe = event => {
    this.title = "Tivi sony";
  }
  
}
