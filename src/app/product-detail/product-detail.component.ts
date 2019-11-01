import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../Category';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  //@Input() product: Product;
  product: Product;
  products: Product[];
  categories: Category[];
  cate: Category;
  constructor(private productService: ProductService,
    private routes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProductDetail();
    this.getCategoryies();
    this.getCategory();
    this.getProducts();
  }
  //Sản phẩm đang thuộc danh mục nào
  getCategory() {
    this.routes.params.subscribe(param => {
      console.log(param);
      this.productService.getCategory(param.cateId).subscribe(data => {
        this.cate = data;
      })
    })
  }
  //danh sách category
  getCategoryies() {
    this.productService.getCates().subscribe(cate => {
      this.categories = cate
    })
  }
  //binding chi tiết sản phẩm
  getProductDetail() {
    this.routes.params.subscribe(param => {
      //console.log(param)
      this.productService.getProductDetail(param.cateId, param.id).subscribe(data => {
        this.product = data;
      })
    }
    )
  }
  //list sp cùng loại
  getProducts(){
    this.routes.params.subscribe(param => {
      this.productService.getProducts(param.cateId).subscribe(data => {
        //console.log(data);
        this.products = data;
      })
    })
    
  }
}
