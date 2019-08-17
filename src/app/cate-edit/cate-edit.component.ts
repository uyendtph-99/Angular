import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../Category';

@Component({
  selector: 'app-cate-edit',
  templateUrl: './cate-edit.component.html',
  styleUrls: ['./cate-edit.component.css']
})
export class CateEditComponent implements OnInit {
  cate: Category;
  constructor(
    private productService: ProductService,
    private routes: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit() {
    this.getCategory();
  }
  getCategory() {
    this.routes.params.subscribe(param => {
      //console.log(param)
      this.productService.getCategory(param.id).subscribe(data => {
        this.cate = data;
      })
    }
    )
  }
  saveCate() {
    this.productService.saveCate(this.cate).subscribe(data => {
      this.router.navigateByUrl("/manager");
    })
  }
}
