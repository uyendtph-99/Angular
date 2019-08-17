import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Category } from './Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularNew';
  getAddress(value){
   console.log(value);
  }
  categories: Category[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getCategoryies();
  }
  getCategoryies(){
    this.productService.getCates().subscribe(cate => {
      this.categories = cate
    })
  }
}
