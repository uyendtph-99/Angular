import { Injectable } from '@angular/core';
import { Data } from '../Data';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = Data;
  constructor() { }
  getProducts():Product[]{
    return this.products;
  }
  addProduct(product){
    //console.log(product)
    const newProduct = {id: this.products.length + 1, ...product};
    return this.products.push(newProduct);
  }
}
