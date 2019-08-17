import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Category } from '../Category';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  cate: Category = new Category();
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  addCategory(){
    this.productService.addCategory(this.cate).subscribe(data =>{
      this.router.navigateByUrl('/manager')
    });
  }
}
