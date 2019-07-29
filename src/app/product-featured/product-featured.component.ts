import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import { Data } from '../data';
@Component({
  selector: 'app-product-featured',
  templateUrl: './product-featured.component.html',
  styleUrls: ['./product-featured.component.css']
})
export class ProductFeaturedComponent implements OnInit {
  products = Data;
  constructor() { }

  ngOnInit() {
  }

}
